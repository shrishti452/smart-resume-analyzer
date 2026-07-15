from flask import Blueprint, jsonify

from models.resume import Resume


resume_bp = Blueprint("resume", __name__)


@resume_bp.route("/resumes", methods=["GET"])
def get_resumes():

    resumes = Resume.query.all()

    resume_list = []

    for resume in resumes:
        resume_list.append({
            "id": resume.id,
            "filename": resume.filename,
            "ats_score": resume.ats_score,
            "skills": resume.skills.split(", "),
            "suggestions": resume.suggestions.split("\n"),
            "created_at": resume.created_at
        })

    return jsonify(resume_list)