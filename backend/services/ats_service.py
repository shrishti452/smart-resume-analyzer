def calculate_ats_score(resume_text, job_keywords):

    resume_text = resume_text.lower()

    matched_keywords = []

    for keyword in job_keywords:
        if keyword.lower() in resume_text:
            matched_keywords.append(keyword)

    if len(job_keywords) == 0:
        return 0, []

    score = (len(matched_keywords) / len(job_keywords)) * 100

    return round(score), matched_keywords