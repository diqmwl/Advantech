package com.hansung.android.kiwi;

public class User {
    String User_PhoneNumber;
    String User_Name;
    String User_Birth;
    String User_DriverNumber;
    String User_DriverIdentifyNumber;

    public User(String user_PhoneNumber, String user_Name, String user_Birth, String user_DriverNumber, String user_DriverIdentifyNumber) {
        User_PhoneNumber = user_PhoneNumber;
        User_Name = user_Name;
        User_Birth = user_Birth;
        User_DriverNumber = user_DriverNumber;
        User_DriverIdentifyNumber = user_DriverIdentifyNumber;
    }


    public String getUser_PhoneNumber() {
        return User_PhoneNumber;
    }

    public void setUser_PhoneNumber(String user_PhoneNumber) {
        User_PhoneNumber = user_PhoneNumber;
    }

    public String getUser_Name() {
        return User_Name;
    }

    public void setUser_Name(String user_Name) {
        User_Name = user_Name;
    }

    public String getUser_Birth() {
        return User_Birth;
    }

    public void setUser_Birth(String user_Birth) {
        User_Birth = user_Birth;
    }

    public String getUser_DriverNumber() {
        return User_DriverNumber;
    }

    public void setUser_DriverNumber(String user_DriverNumber) {
        User_DriverNumber = user_DriverNumber;
    }

    public String getUser_DriverIdentifyNumber() {
        return User_DriverIdentifyNumber;
    }

    public void setUser_DriverIdentifyNumber(String user_DriverIdentifyNumber) {
        User_DriverIdentifyNumber = user_DriverIdentifyNumber;
    }
}
