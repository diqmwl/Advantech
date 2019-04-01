package com.hansung.android.kiwi;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Switch;

import java.util.ArrayList;

public class TermActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_term);

        ArrayList<Button> Term = new ArrayList<>();

        // 컬렉션 생성해서 다 만듦
        Term.add((Button) findViewById(R.id.Term_Activity_Term1));
        Term.add((Button) findViewById(R.id.Term_Activity_Term2));
        Term.add((Button) findViewById(R.id.Term_Activity_Term3));
        Term.add((Button) findViewById(R.id.Term_Activity_Term4));

        ImageView leftarrow = findViewById(R.id.Term_Activity_left_arrow);
        leftarrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onBackPressed();
            }
        });

        for(int i = 0; i<4; i++){
            setClick(Term.get(i));
        }

    }

    public void setClick(Button button){

        switch(button.getId()){
            case R.id.Term_Activity_Term1:
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com/#/policy-personal-info")));
                    }
                });
                break;
            case R.id.Term_Activity_Term2:
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com/#/policy-service")));
                    }
                });
                break;
            case R.id.Term_Activity_Term3:
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com/#/policy-location")));
                    }
                });
                break;
            case R.id.Term_Activity_Term4:
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com/#/policy-rent")));
                    }
                });
                break;


        }



    }


}
