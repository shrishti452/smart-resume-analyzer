import re
def extract_skills(text):

    skills_database = [
        "Python",
        "Java",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Flask",
        "Django",
        "SQL",
        "MySQL",
        "SQLite",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Azure"
    ]

    text = text.lower()

    extracted_skills = []

    for skill in skills_database:
        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, text):
            extracted_skills.append(skill)

    return extracted_skills