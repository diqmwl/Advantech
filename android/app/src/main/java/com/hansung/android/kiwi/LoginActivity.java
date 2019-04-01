package com.hansung.android.kiwi;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

public class LoginActivity extends Activity {
    final static String TAG = "LoginActivity";
    static Context mContext = null;

    private final int  MY_PERMISSION_REQUEST_STORAGE = 100;


    static Button RequestAuth;
    static ProgressBar progressBar;


    public LoginActivity() {
        super();

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login); //빨간줄 없는데 앱 중지
              //내 이미지 파일은 "drawable-v24"폴더에 있습니다. "drawable"폴더에도 복사했습니다. 문제 해결됨.
        //23이상일 때는 아래의 권한 설정해주기

        final EditText PhoneNumber = findViewById(R.id.Login_Activity_PhoneNumber);
        RequestAuth = findViewById(R.id.Login_Activity_RequestAuth);
        progressBar = findViewById(R.id.Login_Activity_ProgressBar);
        progressBar.setVisibility(View.INVISIBLE);  // 첨에 안보이게 하기

        mContext = this;

        if (Build.VERSION.SDK_INT >= 23) {
            checkPermission(Contact.PERMISSIONS);
        }



        RequestAuth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                RequestAuth.setEnabled(false);
                RequestAuth.setText("");  // 공백으로바꾸기

                progressBar.setVisibility(View.VISIBLE);


                JSONObject postDataParam = new JSONObject();
                TempOfKiwi.PhoneNumber = String.valueOf(PhoneNumber.getText());

                try {
                    postDataParam.put("phonenumber", TempOfKiwi.PhoneNumber);
                    // 실행
                    new AuthPhoneInsertData(LoginActivity.this).execute(postDataParam);
                    Log.e("전화번호", TempOfKiwi.PhoneNumber);
                } catch (JSONException e) {
                    Log.e(TAG, "JSONEXception");
                }



            }
        });


    }

    // 권한체크
    @TargetApi(Build.VERSION_CODES.M)
    private void checkPermission(String[] permissions){
        requestPermissions(permissions, MY_PERMISSION_REQUEST_STORAGE);
    }



}
