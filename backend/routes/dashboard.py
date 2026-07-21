from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from models.resume import Resume


dashboard_bp = Blueprint(
    "dashboard",
    __name__
)


@dashboard_bp.route(
    "/api/dashboard",
    methods=["GET"]
)
@jwt_required()
def dashboard():

    user_id = get_jwt_identity()


    resumes = Resume.query.filter_by(
        user_id=user_id
    ).all()


    data = []

    for resume in resumes:

        data.append({

            "id": resume.id,

            "filename": resume.filename,

            "ats_score": resume.ats_score,

            "skills": resume.skills,

            "suggestions": resume.suggestions,

            "created_at": resume.created_at

        })


    return jsonify({

        "message": "Dashboard data fetched successfully",

        "resumes": data

    }), 200