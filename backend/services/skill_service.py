def extract_skills(resume_text):

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

    resume_text = resume_text.lower()

    extracted_skills = []

    for skill in skills_database:
        if skill.lower() in resume_text:
            extracted_skills.append(skill)

    return extracted_skills