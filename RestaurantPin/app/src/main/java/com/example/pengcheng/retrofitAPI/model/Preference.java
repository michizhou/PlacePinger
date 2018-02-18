package com.example.pengcheng.retrofitAPI.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pengcheng on 2/17/18.
 */

public class Preference {
    @SerializedName("preferences")
    private ArrayList<Object> preferences;
    @SerializedName("frequency")
    private int frequency;
    @SerializedName("name")
    private String name;
    @SerializedName("category")
    private ArrayList<String> category;

    public Preference(ArrayList<Object> preferences, int frequency, String name, ArrayList<String> category ){
        this.preferences = preferences;
        this.frequency = frequency;
        this.name  = name;
        this.category = category;
    }

    public ArrayList<Object> getPreferences(){
        return this.preferences;
    }

    public void setPreferences(ArrayList<Object> preferences){
        this.preferences = preferences;
    }

    public int getFrequency(){
        return this.frequency;
    }

    public void setFrequency(int frequency){
        this.frequency = frequency;
    }


    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public ArrayList<String> getCategory(){
        return this.category;
    }

    public void setCategory(ArrayList<String> category){
        this.category = category;
    }


}
