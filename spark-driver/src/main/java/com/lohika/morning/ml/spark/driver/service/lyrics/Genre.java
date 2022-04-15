package com.lohika.morning.ml.spark.driver.service.lyrics;

public enum Genre {
    COUNTRY("Country", 0D),
    POP("Pop", 1D),
    JAZZ("Jazz", 2D),
    ROCK("Rock", 3D),
    HIPHOP("HipHop", 4D),
    REGGAE("Reggae", 5D),
    BLUES("Blues", 6D),
    UNKNOWN("Don\'t know :(", -1D);

    private final String name;
    private final Double value;

    Genre(final String name, final Double value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public Double getValue() {
        return value;
    }

}
