package com.hansung.android.kiwi;

import android.app.Activity;
import android.app.ProgressDialog;

import java.net.MalformedURLException;
import java.net.URL;

import static com.hansung.android.kiwi.MainActivity.defaultUrl;

public class LicenseInsertData extends LicensePostRequest { //로그인할때 쓰는거 값을 받고 받아오는걸로 로그인함

    static ProgressDialog LoadingDialog;

    public LicenseInsertData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        LoadingDialog = new ProgressDialog(activity);


        LoadingDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
        LoadingDialog.setMessage("로딩중입니다..");

        // show dialog
        if (!activity.isFinishing()) {
            LoadingDialog.show();
        }

        try {
            url = new URL(defaultUrl + "/users/license");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}