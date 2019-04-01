package com.hansung.android.kiwi;

import com.anjlab.android.iab.v3.SkuDetails;

import org.json.JSONObject;

import java.util.ArrayList;

public class TempOfKiwi {


    public static String AuthCode = "";  // 전화번호 인증할때 코드를 저장할 변수
    public static String PhoneNumber = "";  // 전화번호 인증할 때 전화번호를 저장할 변수

    public static User user;   // 유저 객체


    private static ArrayList<BikeStorage> bikeStorages = null; //보관소관련 컬렉션

    public static void setBikeStorages(ArrayList<BikeStorage> bikeStorages){
        TempOfKiwi.bikeStorages = bikeStorages;
    }

    public static ArrayList<BikeStorage> getBikeStorages() {return bikeStorages;};


    private static ArrayList<Bikes> bikes = null;

    public static void setBikes(ArrayList<Bikes> bikes){
        TempOfKiwi.bikes = bikes;
    }

    public static ArrayList<Bikes> getBikes() {return bikes;};


    public static ArrayList<SkuDetails> skuDetails = null;

    public static void setSkuDetails(ArrayList<SkuDetails> skuDetails){
        TempOfKiwi.skuDetails = skuDetails;
    }

    public static ArrayList<SkuDetails> getSkuDetails() {return skuDetails;}

    public static SkuDetails product;

    public static void setProduct(SkuDetails product){
        TempOfKiwi.product =product;
    }

    public static SkuDetails getProduct() {return product;}



}
