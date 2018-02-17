package com.example.pengcheng.test.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by leetaihy on 2018-02-17.
 */

public class Business {
    @SerializedName("id")
    private String id;
    @SerializedName("name")
    private String name;
    @SerializedName("image_url")
    private String image_url;
    @SerializedName("is_closed")
    private boolean is_closed;
    @SerializedName("url")
    private String url;
    @SerializedName("review_count")
    private String review_count;
    @SerializedName("categories")
    private List<Category> categories;
    @SerializedName("rating")
    private double rating;
    @SerializedName("coordinates")
    private Coordinates coordinates;
    @SerializedName("transactions")
    private List<String> transactions;
    @SerializedName("price")
    private String price;
    @SerializedName("location")
    private LocationData location;
    @SerializedName("phone")
    private String phone;
    @SerializedName("display_phone")
    private String display_phone;
    @SerializedName("distance")
    private double distance;
    public Business(String id, String name, String image_url, boolean is_closed, String url, String review_count,
                    List<Category> categories, double rating, Coordinates coordinates, List<String> transactions, String price,
                    LocationData location, String phone, String display_phone, double distance) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.is_closed = is_closed;
        this.url = url;
        this.review_count = review_count;
        this.categories = categories;
        this.rating = rating;
        this.coordinates = coordinates;
        this.transactions = transactions;
        this.price = price;
        this.location = location;
        this.phone = phone;
        this.display_phone = display_phone;
        this.distance = distance;
    }
    public String getID() {
        return id;
    }
    public void setID(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getImage_url() {
        return image_url;
    }
    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
    public boolean getIs_closed() {
        return is_closed;
    }
    public void setIs_closed(boolean is_closed) {
        this.is_closed = is_closed;
    }
    public String getURL() {
        return url;
    }
    public void setURL(String URL) {
        this.url = URL;
    }
    public String getReview_count() {
        return review_count;
    }
    public void setId(String review_count) {
        this.review_count = review_count;
    }
    public List<Category> getCategories() {
        return categories;
    }
    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }
    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }
    public Coordinates getCoordinates() {
        return coordinates;
    }
    public void setCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
    }
    public List<String> getTransactions() {
        return transactions;
    }
    public void setTransactions(List<String> transactions) {
        this.transactions = transactions;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public LocationData getLocation() {
        return location;
    }
    public void setLocation(LocationData location) {
        this.location = location;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getDisplay_phone() {
        return display_phone;
    }
    public void setDisplay_phone(String display_phone) {
        this.display_phone = display_phone;
    }
    public double getDistance() {
        return distance;
    }
    public void setDistance(double distance) {
        this.distance = distance;
    }
}
