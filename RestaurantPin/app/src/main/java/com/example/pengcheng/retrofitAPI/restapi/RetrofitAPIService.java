package com.example.pengcheng.retrofitAPI.restapi;

import com.example.pengcheng.retrofitAPI.model.Rating;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Query;

/**
 * Created by pengcheng on 2/18/18.
 */

public interface RetrofitAPIService {
    @GET("tasks")
    Call<List<Rating>> getDatas();

    @POST("sms")
    Call<Integer> sendSMS();

//    @POST("tasks")
//    Call<Rating> postDatas(@Query("clientID") String clientID, @Query("interest") String interest);
//}
}