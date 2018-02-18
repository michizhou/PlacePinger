package com.example.pengcheng.retrofitAPI.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

/**
 * Created by pengcheng on 2/18/18.
 */

public class Rating {
    @SerializedName("clientID")
    private String clientID;
    @SerializedName("Preference")
    private ArrayList<Preference> preferences;

    public Rating(String clientID, ArrayList<Preference> preferences){
        this.clientID = clientID;
        this.preferences = preferences;
    }

    public String getClientID(){
        return this.clientID;
    }

    public void setClientID(String clientID){
        this.clientID = clientID;
    }

    public ArrayList<Preference> getPreferences(){
        return this.preferences;
    }

    public void setFrequency(ArrayList<Preference> preferences){
        this.preferences = preferences;
    }
}
