package com.hansung.android.kiwi;

import android.app.Activity;
import android.content.Intent;
import android.os.AsyncTask;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Iterator;

import javax.net.ssl.HttpsURLConnection;

public class AuthPhonePostRequest extends AsyncTask<JSONObject, Void, String> {
    Activity activity;
    URL url;



    public AuthPhonePostRequest(Activity activity) {
        this.activity = activity;
    }


    @Override
    protected String doInBackground(JSONObject... postDataParams) {

        try {
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setReadTimeout(10000 /* milliseconds */);
            conn.setConnectTimeout(10000 /* milliseconds */);
            conn.setRequestMethod("POST");
//            String cookieString = variable.getCookies();   // 헤더에 로그인 토큰값 첨가
//            if (cookieString != null) {
//                conn.setRequestProperty("cookie", cookieString);
//            }
//            conn.setRequestProperty("Content-Type", "application/json");//application JSON 형식으로 전송
//            conn.setRequestProperty("Accept", "text/html");//서버에 response 데이터를 html로 받음
            conn.setDoInput(true);
            conn.setDoOutput(true);

            //서버로 보내기위해서 스트림 만듬
            OutputStream os = conn.getOutputStream();
            //버퍼를 생성하고 넣음
            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(os, "UTF-8"));
            String str = getPostDataString(postDataParams[0]);
            Log.e("params", "Post String = " + str);
            writer.write(str);

            writer.flush();
            writer.close(); //버퍼를 받아줌
            os.close();

            int responseCode = conn.getResponseCode();

            if (responseCode == HttpsURLConnection.HTTP_OK) {
                //서버로 부터 데이터를 받음
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuffer sb = new StringBuffer("");
                String line = "";

                while ((line = in.readLine()) != null) {
                    sb.append(line);
                    break;
                }

                in.close();
                return sb.toString(); //서버로 부터 받은 값을 리턴해줌 아마 OK!!가 들어올것임

            } else {
                return new String("Server Error : " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    protected void onPostExecute(String result) {

        super.onPostExecute(result);

        TempOfKiwi.AuthCode = result.trim();   // 공통변수에 저장해두고
        Toast.makeText(LoginActivity.mContext, result.trim(),Toast.LENGTH_LONG).show();

        Log.e("AuthPhonePostRequest",result.trim());

        Intent GoToInsertCode_intent = new Intent(LoginActivity.mContext, InsertCodeActivity.class);
        LoginActivity.mContext.startActivity(GoToInsertCode_intent); // 액티비티 이동해두고

        LoginActivity.RequestAuth.setEnabled(true);   // 텍스트 보이게
        LoginActivity.RequestAuth.setText("인증코드 발송");  // 텍스트바꾸기
        LoginActivity.progressBar.setVisibility(View.INVISIBLE);


//        try{
//            Log.e("AuthPhonePostRequest",temp);
//
//        }catch (Exception e){
//            Log.e("AuthPhonePostRequest",e.toString());
//        }


        //        temp = result.trim();
//
//        Log.e("AuthPhonePostRequest",temp);







////
//
//        String SB = temp; //일단 String버퍼를 스트링 형식으로 변형
//
//
//        if (temp == null) {
//            Toast.makeText(activity, message1,
//                    Toast.LENGTH_LONG).show();
//            return;
//        } else if (temp.equals("0")) {
//            Toast.makeText(activity, "중복된 아이디입니다..",
//                    Toast.LENGTH_LONG).show();
////            variable.setAuthnumber("9999");
//            return;
//        } else { // 비밀번호가 왔어염
//            int index = SB.indexOf(":"); // :로자르고
//            String AuthNumber;
//            AuthNumber = SB.substring(index + 1, SB.length() - 1);
//
//            Toast.makeText(activity, message2,
//                    Toast.LENGTH_LONG).show();
//
//        }

    }

    private String getPostDataString(JSONObject params) throws Exception {

        StringBuilder result = new StringBuilder();
        boolean first = true;

        Iterator<String> itr = params.keys();

        while (itr.hasNext()) {

            String key = itr.next();
            Object value = params.get(key);

            if (first)
                first = false;
            else
                result.append("&");

            result.append(URLEncoder.encode(key, "UTF-8"));
            result.append("=");
            result.append(URLEncoder.encode(value.toString(), "UTF-8"));

        }
        return result.toString();
    }
}
