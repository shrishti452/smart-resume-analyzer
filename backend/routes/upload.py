from flask import Blueprint, request, jsonify
from services.pdf_service import extract_text_from_pdf
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


    return jsonify({
        "success": True,
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "extracted_text": text
    })