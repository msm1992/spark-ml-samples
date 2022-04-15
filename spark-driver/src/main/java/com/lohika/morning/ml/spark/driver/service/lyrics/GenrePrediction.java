package com.lohika.morning.ml.spark.driver.service.lyrics;

public class GenrePrediction {

    private String genre;
    private Double countryProbability;
    private Double popProbability;
    private Double jazzProbability;
    private Double rockProbability;
    private Double hiphopProbability;
    private Double reggaeProbability;
    private Double blueProbability;

    public GenrePrediction(String genre, Double countryProbability, Double popProbability, Double jazzProbability, Double rockProbability,
                           Double hiphopProbability, Double reggaeProbability, Double blueProbability) {
        this.genre = genre;
        this.countryProbability = countryProbability;
        this.popProbability = popProbability;
        this.jazzProbability = jazzProbability;
        this.rockProbability = rockProbability;
        this.hiphopProbability = hiphopProbability;
        this.reggaeProbability = reggaeProbability;
        this.blueProbability = blueProbability;
    }

    public GenrePrediction(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

    public Double getCountryProbability() {
        return countryProbability;
    }

    public Double getPopProbability() {
        return popProbability;
    }

    public Double getJazzProbability() {
        return jazzProbability;
    }

    public Double getRockProbability() {
        return rockProbability;
    }

    public Double getHiphopProbability() {
        return hiphopProbability;
    }

    public Double getReggaeProbability() {
        return reggaeProbability;
    }

    public Double getBlueProbability() {
        return blueProbability;
    }
}
