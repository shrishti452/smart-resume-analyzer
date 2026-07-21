from flask import Flask
from flask_cors import CORS

from config import Config
from extensions import db, bcrypt, jwt
from routes.upload import upload_bp
from routes.resume import resume_bp
from models.resume import Resume
from models.user import User
from routes.auth import auth_bp
from routes.dashboard import dashboard_bp

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)

bcrypt.init_app(app)
jwt.init_app(app)

CORS(app)

app.register_blueprint(upload_bp)

app.register_blueprint(resume_bp)

app.register_blueprint(auth_bp, url_prefix="/api/auth")

app.register_blueprint(dashboard_bp)

@app.route("/")
def home():
    return {
        "message": "Smart Resume Analyzer Backend Running 🚀"
    }


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)