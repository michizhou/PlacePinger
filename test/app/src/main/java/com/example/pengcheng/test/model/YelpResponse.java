package com.example.pengcheng.test.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by leetaihy on 2018-02-17.
 */

public class YelpResponse {
    @SerializedName("total")
    private int total;
    @SerializedName("businesses")
    private List<Business> businesses;
    @SerializedName("region")
    private Coordinates region;
    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }
    public List<Business> getBusinesses() {
        return businesses;
    }
    public void setBusinesses(List<Business> businesses) {
        this.businesses = businesses;
    }
    public Coordinates getRegion() {
        return region;
    }
    public void setRegion(Coordinates region) {
        this.region = region;
    }
}
