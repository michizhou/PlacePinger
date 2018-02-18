package com.example.pengcheng.restaurantpin;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.example.pengcheng.yelpapi.model.Business;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;
import com.github.mikephil.charting.utils.ColorTemplate;

import java.util.ArrayList;

public class GraphActivity extends AppCompatActivity {
    PieChart pie;
    private static final String TAG = com.example.pengcheng.restaurantpin.MapsActivity.class.getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_graph);
        pie = (PieChart)findViewById(R.id.piechart);
        pie.setUsePercentValues(true);
        pie.setExtraOffsets(5,10,5,5);
        pie.setDragDecelerationFrictionCoef(0.95f);
        pie.setDragDecelerationEnabled(true);
        pie.setDrawHoleEnabled(true);
        pie.setTransparentCircleRadius(61f);

        ArrayList<PieEntry> yValues = new ArrayList<>();
        for(int i = 0; i<10; i++){
            yValues.add(new PieEntry( (float) MapsActivity.yelpdata.get(i).getRating() ,
                    MapsActivity.yelpdata.get(i).getName()));
            Log.d(TAG, MapsActivity.yelpdata.get(i).getCategories().get(0).getitle());

        }
        PieDataSet dataSet = new PieDataSet(yValues, "countries");
        dataSet.setSliceSpace(3f);
        dataSet.setSelectionShift(5f);
        dataSet.setColors(ColorTemplate.JOYFUL_COLORS);

        PieData data = new PieData(dataSet);
        data.setValueTextSize(10f);
        data.setValueTextColor(Color.BLACK);

        pie.setData(data);






    }
}
