import re
def extract_skills(text):

    skills_database = [

    # Programming Languages
    "C",
    "C++",
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Go",
    "PHP",

    # Frontend
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Bootstrap",
    "Tailwind CSS",

    # Backend
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    "Spring Boot",

    # Databases
    "SQL",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Firebase",

    # AI / ML
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",

    # Cloud & DevOps
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Git",
    "GitHub",
    "Linux",

    # Tools
    "VS Code",
    "Postman",
    "Figma"

]

    text = text.lower()

    extracted_skills = []

    for skill in skills_database:
        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, text):
            extracted_skills.append(skill)

    return extracted_skills