package com.example.pengcheng.yelpapi.restapi;

import com.example.pengcheng.yelpapi.model.YelpResponse;
import com.example.pengcheng.yelpapi.model.YelpResponse;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Query;

/**
 * Created by leetaihy on 2018-02-17.
 */

public interface YelpApiService {
    @Headers("Authorization: Bearer yIUyHoboGLAWht2WM0tz69BRxUKz-UYQ0c-H3zT5xJyUIsc24p-UoWYnQiOt0LTz-9PRu1QGoZFx_MsU8YSJpGpzB01GUNzsoX4_HeN8jXPPNE2LpZyIdcO-kfWHWnYx")
    @GET("businesses/search")
    Call<YelpResponse> getMatchingBusinesses(@Query("radius") int radius, @Query("longitude") double longitude, @Query("latitude") double latitude);
}