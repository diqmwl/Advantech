package com.hansung.android.kiwi;

import android.app.Activity;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import static com.hansung.android.kiwi.LoginPostRequest.temp;
import static com.hansung.android.kiwi.MainActivity.defaultUrl;
import static com.hansung.android.kiwi.GetRequest.output;


public class MyPageGetData extends GetRequest {

    public static String TAG_name, TAG_email, TAG_license_num, TAG_license_lssued, TAG_license_expiration;


    public MyPageGetData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        try {
            url = new URL(defaultUrl + "/users/authenticate");  // http://serverURLStr/get-data
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onPostExecute(String jsonString) {
        jsonString = temp;
        if (jsonString == null) {
            Log.d("jsonStrMyPageGetData1", jsonString + "");
            return;
        } else if (jsonString.trim().equals("0")) {
            Log.d("jsonStrMyPageGetData2", jsonString + "");
            return;
        } else {


            Log.d("jsonStrMyPageGetData3", jsonString + "");

            // ArrayList<User> arrayList = getArrayListFromJSONString(jsonString); //겟어레이메소드 실

            getFromJSONString(jsonString);  // TempOfKiwi 에 받아온 변수 저장


            //  arrayList.get(0).id; //어레이리스트의 몇번째를 가져와 뿌려준다

        }


        //어레이리스트 각각 칸에는 클래스에대한 정보가 들어있고
        // 그리고 어레이 리스트레 정보를 뿌려준다

//        ArrayAdapter adapter = new ArrayAdapter(activity,
//                android.R.layout.simple_list_item_1,
//                arrayList.toArray());
//        ListView txtList = activity.findViewById(R.id.txtList);
//        txtList.setAdapter(adapter);

    }


    protected ArrayList<User> getArrayListFromJSONString(String jsonString) {
        ArrayList<User> output = new ArrayList(); //User Array 생성

        try {

            Log.d("유저 제이슨스트링값", jsonString);

            // JSONArray jsonArray=new JSONArray(jsonString); //json형식의 string을 객체에 저장

            JSONObject jsonObject = null;
            jsonObject = new JSONObject(jsonString);
            JSONObject jsonUser = jsonObject.getJSONObject("user"); //user 카테고리 확인하고
            // 그 안에있는 name, email 등 정보 추출


            Log.d("유저 제이슨스트링 > 제이슨오브젝트 ", String.valueOf(jsonUser));


            //정수형: getInt(), 실수형: getDouble(), 문자: getString()


            TempOfKiwi.user.User_PhoneNumber = jsonUser.getString("name");
            TempOfKiwi.user.User_Name = jsonUser.getString("email");
            TempOfKiwi.user.User_Birth = jsonUser.getString("license_num");
            TempOfKiwi.user.User_DriverNumber = jsonUser.getString("license_issued");
            TempOfKiwi.user.User_DriverIdentifyNumber = jsonUser.getString("license_expiration");

            // 변수명 맞추기
//
//
//            TAG_name = jsonUser.getString("name");
//            Log.d("", TAG_name);
//            TAG_email = jsonUser.getString("email");
//            TAG_license_num = jsonUser.getString("license_num");
//            TAG_license_lssued = jsonUser.getString("license_issued");
//            TAG_license_expiration = jsonUser.getString("license_expiration");
//            Log.d("", TAG_name);
//            Log.d("", TAG_email);
//            Log.d("", TAG_license_expiration);
//            Log.v("Navi", jsonObject.toString());
            //output.add(user);
////
////                View header = ((NavigationView)findViewById(R.id.nav_view)).getHeaderView(0);
////                ((TextView) header.findViewById(R.id.Name)).setText(TAG_name);
////                ((TextView) header.findViewById(R.id.Email)).setText(TAG_email);


        } catch (JSONException e) {
            e.printStackTrace();
        }
        return output;
    }


    protected void getFromJSONString(String jsonString) {

        try {

            Log.d("유저 제이슨스트링값", jsonString);

            // JSONArray jsonArray=new JSONArray(jsonString); //json형식의 string을 객체에 저장

            JSONObject jsonObject = null;
            jsonObject = new JSONObject(jsonString);
            JSONObject jsonUser = jsonObject.getJSONObject("user"); //user 카테고리 확인하고
            // 그 안에있는 name, email 등 정보 추출


            Log.d("유저 제이슨스트링 > 제이슨오브젝트 ", String.valueOf(jsonUser));


            //정수형: getInt(), 실수형: getDouble(), 문자: getString()

            // 유저 정보 저장
            TempOfKiwi.user = new User(
                    jsonUser.getString("name"),
                    jsonUser.getString("email"),
                    jsonUser.getString("license_num"),
                    jsonUser.getString("license_issued"),
                    jsonUser.getString("license_expiration"));

        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

}
