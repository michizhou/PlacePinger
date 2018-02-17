package com.example.pengcheng.test.activity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;

import com.example.pengcheng.test.R;
import com.example.pengcheng.test.model.Business;
import com.example.pengcheng.test.model.YelpResponse;
import com.example.pengcheng.test.rest.YelpApiService;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    public static final String BASE_URL = "https://api.yelp.com/v3/";//"http://api.themoviedb.org/3/";
    private static Retrofit retrofit = null;
    private RecyclerView recyclerView = null;
    // insert your themoviedb.org API KEY here
    private final static String API_KEY = "yIUyHoboGLAWht2WM0tz69BRxUKz-UYQ0c-H3zT5xJyUIsc24p-UoWYnQiOt0LTz-9PRu1QGoZFx_MsU8YSJpGpzB01GUNzsoX4_HeN8jXPPNE2LpZyIdcO-kfWHWnYx";//"a4835c60cc6716a367ca6351668f5536";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        recyclerView = (RecyclerView) findViewById(R.id.recycler_view);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        connectAndGetApiData();
    }
    // This method create an instance of Retrofit
// set the base url
    public void connectAndGetApiData(){
        if (retrofit == null) {
            retrofit = new Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        YelpApiService yelpApiService = retrofit.create(YelpApiService.class);
        Call<YelpResponse> call = yelpApiService.getMatchingBusinesses(-122.399972,37.786882);
        call.enqueue(new Callback<YelpResponse>() {
            @Override
            public void onResponse(Call<YelpResponse> call, Response<YelpResponse> response) {
                for(Business b : response.body().getBusinesses()) {
                    Log.d(TAG, b.getName());
                }
            }

            @Override
            public void onFailure(Call<YelpResponse> call, Throwable t) {
                Log.e(TAG, "printing error");
                Log.e(TAG, t.toString());
            }
        });


    }
}
