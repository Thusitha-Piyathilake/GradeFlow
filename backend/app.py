import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

subjects = []

GRADE_POINTS = {
    "A+": 4.0,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "E": 0.0
}

@app.route("/")
def home():
    return {"message": "Welcome to GradeFlow API"}

@app.route("/subjects", methods=["GET"])
def get_subjects():
    return jsonify(subjects)

@app.route("/subjects", methods=["POST"])
def add_subject():
    data = request.json

    subject = {
        "id": len(subjects) + 1,
        "name": data["name"],
        "credits": data["credits"],
        "grade": data["grade"]
    }

    subjects.append(subject)

    return jsonify(subject), 201

@app.route("/subjects/<int:id>", methods=["PUT"])
def update_subject(id):
    data = request.json

    for subject in subjects:
        if subject["id"] == id:
            subject["name"] = data["name"]
            subject["credits"] = data["credits"]
            subject["grade"] = data["grade"]

            return jsonify(subject)

    return {"message": "Subject not found"}, 404

@app.route("/subjects/<int:id>", methods=["DELETE"])
def delete_subject(id):
    global subjects
    subjects = [s for s in subjects if s["id"] != id]

    return {"message": "Subject deleted"}

@app.route("/gpa", methods=["GET"])
def calculate_gpa():
    if len(subjects) == 0:
        return jsonify({
            "gpa": 0.0,
            "totalCredits": 0
        })

    total_points = 0
    total_credits = 0

    for subject in subjects:
        grade_point = GRADE_POINTS[subject["grade"]]

        total_points += grade_point * subject["credits"]
        total_credits += subject["credits"]

    gpa = round(total_points / total_credits, 2)

    return jsonify({
        "gpa": gpa,
        "totalCredits": total_credits
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port
    )