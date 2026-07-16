def generate_suggestions(missing_skills):

    suggestions = []

    suggestion_map = {

        "Node.js": "Learn Node.js to strengthen your backend development skills.",

        "MongoDB": "Add MongoDB experience for full stack development roles.",

        "Docker": "Learn Docker for deployment and DevOps workflows.",

        "AWS": "Gain hands-on experience with AWS cloud services.",

        "GitHub": "Build and publish more projects on GitHub.",

        "Machine Learning": "Include Machine Learning projects relevant to this role.",

        "React": "Improve your React knowledge by building real-world projects.",

        "Python": "Strengthen your Python skills with practical applications.",

        "Java": "Practice Java by solving DSA problems and building projects.",

        "SQL": "Improve SQL skills with database design and query practice.",

        "C": "Strengthen your C programming fundamentals.",

        "C++": "Practice C++ with object-oriented programming and DSA."
    }

    for skill in missing_skills:

        if skill in suggestion_map:
            suggestions.append(suggestion_map[skill])

        else:
            suggestions.append(f"Consider learning {skill} to better match this job description.")

    if len(suggestions) == 0:

        suggestions.append(
            "Excellent! Your resume matches the required job skills."
        )

    return suggestions