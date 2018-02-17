package com.example.pengcheng.test.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by leetaihy on 2018-02-17.
 */

public class Coordinates {
    @SerializedName("position")
    private CoordinatesLongLat position;
    public Coordinates(CoordinatesLongLat position) {
        this.position = position;
    }
    public CoordinatesLongLat getPosition() {
        return position;
    }
    public void setPosition(CoordinatesLongLat position) {
        this.position = position;
    }
}
