from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from services.pdf_service import extract_text_from_pdf
from services.ats_service import calculate_ats_score
from services.skill_service import extract_skills
from services.suggestion_service import generate_suggestions

from models.resume import Resume
from extensions import db

import os

upload_bp = Blueprint("upload", __name__)

UPLOAD_FOLDER = "uploads"


@upload_bp.route("/upload", methods=["POST"])
@jwt_required()
def upload_resume():

    # Current Logged-in User
    user_id = get_jwt_identity()

    if "resume" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["resume"]

    job_description = request.form.get("job_description", "")

    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No file selected"
        }), 400

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    file.save(file_path)

    # Extract Resume Text
    text = extract_text_from_pdf(file_path)

    # Resume Skills
    extracted_skills = extract_skills(text)

    # Job Description Skills
    job_skills = extract_skills(job_description)

    # ATS
    ats_score, matched_skills, missing_skills = calculate_ats_score(
        text,
        job_skills
    )

    # Suggestions
    suggestions = generate_suggestions(
        missing_skills
    )

    # Save in Database
    resume = Resume(
        filename=file.filename,
        ats_score=ats_score,
        skills=", ".join(extracted_skills),
        suggestions="\n".join(suggestions),
        user_id=user_id
    )

    db.session.add(resume)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "ats_score": ats_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "skills": extracted_skills,
        "suggestions": suggestions
    }), 201