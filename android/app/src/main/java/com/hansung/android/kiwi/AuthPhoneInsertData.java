package com.hansung.android.kiwi;

import android.app.Activity;

import java.net.MalformedURLException;
import java.net.URL;

import static com.hansung.android.kiwi.MainActivity.defaultUrl;


public class AuthPhoneInsertData extends AuthPhonePostRequest { //레지스터
    public AuthPhoneInsertData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        try {
            url = new URL(defaultUrl + "/users/smsAuth");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}
