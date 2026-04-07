package com.example.placementreadiness.model;

public class Student {

    private String name;
    private double cgpa;
    private int codingScore;
    private int aptitudeScore;
    private int communicationScore;

    private int readinessScore;
    private String result;
    private String suggestion;
    private String placementProbability;
    private String skillGap;
    private String roadmap;

    // GETTERS & SETTERS

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public int getCodingScore() {
        return codingScore;
    }

    public void setCodingScore(int codingScore) {
        this.codingScore = codingScore;
    }

    public int getAptitudeScore() {
        return aptitudeScore;
    }

    public void setAptitudeScore(int aptitudeScore) {
        this.aptitudeScore = aptitudeScore;
    }

    public int getCommunicationScore() {
        return communicationScore;
    }

    public void setCommunicationScore(int communicationScore) {
        this.communicationScore = communicationScore;
    }

    public int getReadinessScore() {
        return readinessScore;
    }

    public void setReadinessScore(int readinessScore) {
        this.readinessScore = readinessScore;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }

    public String getPlacementProbability() {
        return placementProbability;
    }

    public void setPlacementProbability(String placementProbability) {
        this.placementProbability = placementProbability;
    }

    public String getSkillGap() {
        return skillGap;
    }

    public void setSkillGap(String skillGap) {
        this.skillGap = skillGap;
    }

    public String getRoadmap() {
        return roadmap;
    }

    public void setRoadmap(String roadmap) {
        this.roadmap = roadmap;
    }
}