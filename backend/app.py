from flask import Flask
from flask_cors import CORS

from config import Config
from extensions import db
from routes.upload import upload_bp
from models.resume import Resume

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)

CORS(app)

app.register_blueprint(upload_bp)


@app.route("/")
def home():
    return {
        "message": "Smart Resume Analyzer Backend Running 🚀"
    }


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)