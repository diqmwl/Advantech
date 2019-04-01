package com.hansung.android.kiwi;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class AllianceActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_alliance);

        TextView textView = findViewById(R.id.Alliance_Activity_Text);

        ImageView leftarrow = findViewById(R.id.Alliance_Activity_left_arrow);
        leftarrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

        textView.setText("키위는 학교/지자체 등의 제휴를 환영합니다. :) \ntaeil710@naver.com \n위 메일로 문의 바랍니다. ");



    }


}
