def generate_suggestions(extracted_skills):

    suggestions = []

    recommended_skills = {
        "Node.js": "Add Node.js to improve backend development skills",
        "MongoDB": "Learn MongoDB for better full stack development",
        "Docker": "Add Docker knowledge for deployment and DevOps skills",
        "AWS": "Learn AWS cloud services to strengthen your profile",
        "GitHub": "Showcase more GitHub projects and contributions",
        "Machine Learning": "Add ML projects if applying for AI roles"
    }

    for skill, message in recommended_skills.items():

        if skill not in extracted_skills:
            suggestions.append(message)

    if len(suggestions) == 0:
        suggestions.append(
            "Your resume has a strong skill set. Keep adding impactful projects."
        )

    return suggestions