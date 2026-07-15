from flask import Blueprint, request, jsonify
from services.pdf_service import extract_text_from_pdf
from services.ats_service import calculate_ats_score
from services.skill_service import extract_skills
from services.suggestion_service import generate_suggestions
import os

upload_bp = Blueprint("upload", __name__)

UPLOAD_FOLDER = "uploads"


@upload_bp.route("/upload", methods=["POST"])
def upload_resume():

    if "resume" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["resume"]

    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No file selected"
        }), 400

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(file_path)

    text = extract_text_from_pdf(file_path)

    extracted_skills = extract_skills(text)

    suggestions = generate_suggestions(extracted_skills)

    job_keywords = [
    "Python",
    "React",
    "JavaScript",
    "SQL",
    "Machine Learning",
    "Flask",
    "Node.js"
]

    ats_score, matched_skills = calculate_ats_score(
    text,
    job_keywords
)

    return jsonify({
    "success": True,
    "message": "Resume uploaded successfully",
    "filename": file.filename,
    "extracted_text": text,
    "ats_score": ats_score,
    "matched_skills": matched_skills,
    "skills": extracted_skills,
    "suggestions": suggestions
})