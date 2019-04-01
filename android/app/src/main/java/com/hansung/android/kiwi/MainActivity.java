package com.hansung.android.kiwi;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {


    final static String TAG = "AndroidNodeJS";
    final static String defaultUrl = "http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com";
    public static int Table_num = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        Intent intent = new Intent(this, LoadingActivity.class);
        startActivity(intent);
        finish();


    }
}