package com.example.pengcheng.test.model;

import com.google.gson.annotations.SerializedName;

/**
 * Created by leetaihy on 2018-02-17.
 */

public class Category {
    @SerializedName("alias")
    private String alias;
    @SerializedName("title")
    private String title;
    public Category(String alias, String title) {
        this.alias = alias;
        this.title = title;
    }
    public String getAlias() {
        return alias;
    }
    public void setAlias(String alias) {
        this.alias = alias;
    }
    public String getitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
}
