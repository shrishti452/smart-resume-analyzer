import os


class Config:

    SQLALCHEMY_DATABASE_URI = "sqlite:///resume.db"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = "smart_resume_analyzer_secret_key"

    JWT_SECRET_KEY = "smart_resume_jwt_secret_key"