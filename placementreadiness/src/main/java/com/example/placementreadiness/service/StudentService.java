package com.example.placementreadiness.service;

import com.example.placementreadiness.model.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    public Student checkPlacement(Student s) {

        // 🔹 STEP 1: GET VALUES
        double cgpaScore = s.getCgpa() * 10;
        double coding = s.getCodingScore();
        double aptitude = s.getAptitudeScore();
        double communication = s.getCommunicationScore();

        // 🔹 STEP 2: CALCULATE SCORE
        int score = (int)(
                (cgpaScore * 0.25) +
                (coding * 0.35) +
                (aptitude * 0.20) +
                (communication * 0.20)
        );

        s.setReadinessScore(score);

        // 🔹 STEP 3: RESULT
        if (score >= 80) {
            s.setResult("HIGHLY READY 🚀");
        } else if (score >= 60) {
            s.setResult("MODERATE 🙂");
        } else {
            s.setResult("LOW ⚠️");
        }

        // 🔹 STEP 4: SUGGESTION
        String suggestion = "";

        if (coding < 70) suggestion += "Improve Coding, ";
        if (aptitude < 60) suggestion += "Practice Aptitude, ";
        if (communication < 60) suggestion += "Improve Communication, ";
        if (cgpaScore < 70) suggestion += "Improve CGPA, ";

        // 👉 Fix empty suggestion
        if (suggestion.isEmpty()) {
            suggestion = "No improvement needed 👍";
        }

        s.setSuggestion(suggestion);

        // 🔹 STEP 5: SKILL GAP
        String gap = "";

        if (coding < 70) gap += "DSA, ";
        if (aptitude < 60) gap += "Aptitude, ";
        if (communication < 60) gap += "Communication, ";

        // 👉 Fix empty gap
        if (gap.isEmpty()) {
            gap = "No skill gap 🎯";
        }

        s.setSkillGap(gap);

        // 🔹 STEP 6: PROBABILITY
        int probability = Math.min(100, score + 10);
        s.setPlacementProbability(probability + "%");

        // 🔹 STEP 7: ROADMAP
        String roadmap =
                "Week 1: DSA\n" +
                "Week 2: Aptitude\n" +
                "Week 3: Mock Interviews";

        s.setRoadmap(roadmap);

        // 🔹 FINAL RETURN
        return s;
    }
}