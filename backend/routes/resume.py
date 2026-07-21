from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from models.resume import Resume


resume_bp = Blueprint("resume", __name__)


@resume_bp.route("/resumes", methods=["GET"])
@jwt_required()
def get_resumes():

    user_id = get_jwt_identity()

    resumes = Resume.query.filter_by(user_id=user_id).all()

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