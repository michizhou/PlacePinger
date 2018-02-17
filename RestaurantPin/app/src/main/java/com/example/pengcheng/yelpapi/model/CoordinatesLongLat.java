package com.example.pengcheng.yelpapi.model;

import com.google.gson.annotations.SerializedName;

/**
 * Created by leetaihy on 2018-02-17.
 */

public class CoordinatesLongLat {
    @SerializedName("longitude")
    private double longitude;
    @SerializedName("latitude")
    private double latitude;
    public CoordinatesLongLat(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    public double getLongitude() {
        return longitude;
    }
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
    public double getLatitude() {
        return latitude;
    }
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
}
