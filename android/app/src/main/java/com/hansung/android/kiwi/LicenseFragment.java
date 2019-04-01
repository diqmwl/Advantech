package com.hansung.android.kiwi;


import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.app.AlertDialog;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import java.sql.Driver;


/**
 * A simple {@link Fragment} subclass.
 */
public class LicenseFragment extends Fragment {

    EditText DriverName;
    EditText Year;
    EditText Month;
    EditText Day;
    EditText DriverNumber1;
    EditText DriverNumber2;
    EditText DriverNumber3;
    EditText DriverNumber4;
    EditText IdentifyNumber;
    Button RegisterLicense;

    String DN, Y, M, D, DBirth, DNumber, DNumber1, DNumber2, DNumber3, DNumber4, IN, RL;


    public LicenseFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        LinearLayout LicenseFragment = (LinearLayout) inflater.inflate(R.layout.fragment_license, container, false);

        DriverName = LicenseFragment.findViewById(R.id.License_Fragment_DriverName);
        Year = LicenseFragment.findViewById(R.id.License_Fragment_Year);
        Month = LicenseFragment.findViewById(R.id.License_Fragment_Month);
        Day = LicenseFragment.findViewById(R.id.License_Fragment_Day);
        DriverNumber1 = LicenseFragment.findViewById(R.id.License_Fragment_DriverNumber1);
        DriverNumber2 = LicenseFragment.findViewById(R.id.License_Fragment_DriverNumber2);
        DriverNumber3 = LicenseFragment.findViewById(R.id.License_Fragment_DriverNumber3);
        DriverNumber4 = LicenseFragment.findViewById(R.id.License_Fragment_DriverNumber4);
        IdentifyNumber = LicenseFragment.findViewById(R.id.License_Fragment_IdentifyNumber);
        RegisterLicense = LicenseFragment.findViewById(R.id.License_Fragment_RegisterLivense);


        DriverName.addTextChangedListener(new GenericTextWatcher(DriverName));
        Year.addTextChangedListener(new GenericTextWatcher(Year));
        Month.addTextChangedListener(new GenericTextWatcher(Month));
        Day.addTextChangedListener(new GenericTextWatcher(Day));
        DriverNumber1.addTextChangedListener(new GenericTextWatcher(DriverNumber1));
        DriverNumber2.addTextChangedListener(new GenericTextWatcher(DriverNumber2));
        DriverNumber3.addTextChangedListener(new GenericTextWatcher(DriverNumber3));
        DriverNumber4.addTextChangedListener(new GenericTextWatcher(DriverNumber4));
        IdentifyNumber.addTextChangedListener(new GenericTextWatcher(IdentifyNumber));


        RegisterLicense.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                JSONObject postDataParam = new JSONObject();

                DN = String.valueOf(DriverName.getText());
                Y = String.valueOf(Year.getText());  // 1995
                M = String.valueOf(Month.getText()); // 01
                D = String.valueOf(Day.getText());  // 28
                DNumber1 = String.valueOf(DriverNumber1.getText());
                DNumber2 = String.valueOf(DriverNumber2.getText());
                DNumber3 = String.valueOf(DriverNumber3.getText());
                DNumber4 = String.valueOf(DriverNumber4.getText());
                IN = String.valueOf(IdentifyNumber.getText());

                DBirth = Y + M + D;
                DNumber = DNumber1 + DNumber2 + DNumber3 + DNumber4;


                try {
                    postDataParam.put("Name", DN);  // 운전자 이름
                    postDataParam.put("Birth", DBirth);  // 운전자 생년월일
                    postDataParam.put("DriverNumber", DNumber); // 면허증 번호
                    postDataParam.put("IdentifyNumber", IN);   // 식별번호

                    // 실행
                    new LicenseInsertData(getActivity()).execute(postDataParam);

                    Log.e("전화번호", TempOfKiwi.PhoneNumber);
                } catch (JSONException e) {
                    Log.e("LicenseFragment", "JSONEXception");
                }

            }
        });



//        TextView GoToGuide = (TextView) ServiceCenterFragment.findViewById(R.id.ServiceCenter_Fragment_Guide);

        return LicenseFragment;
    }


    private class GenericTextWatcher implements TextWatcher{

        private View view;
        private GenericTextWatcher(View view) {
            this.view = view;
        }

        public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {}
        public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
        }

        public void afterTextChanged(Editable editable) {
            switch(view.getId()){
                case R.id.License_Fragment_Year:
                    if(Year.length()==4){
                        Month.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_Month:
                    if(Month.length()==2){
                        Day.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_Day:
                    if(Day.length()==2){
                        DriverNumber1.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_DriverNumber1:
                    if(DriverNumber1.length()==2){
                        DriverNumber2.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_DriverNumber2:
                    if(DriverNumber2.length()==2){
                        DriverNumber3.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_DriverNumber3:
                    if(DriverNumber3.length()==6){
                        DriverNumber4.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_DriverNumber4:
                    if(DriverNumber4.length()==2){
                        IdentifyNumber.requestFocus();
                    }
                    break;
                case R.id.License_Fragment_IdentifyNumber:
                    if(IdentifyNumber.length()==6){

                        JSONObject postDataParam = new JSONObject();

                        DN = String.valueOf(DriverName.getText());
                        Y = String.valueOf(Year.getText());  // 1995
                        M = String.valueOf(Month.getText()); // 01
                        D = String.valueOf(Day.getText());  // 28
                        DNumber1 = String.valueOf(DriverNumber1.getText());
                        DNumber2 = String.valueOf(DriverNumber2.getText());
                        DNumber3 = String.valueOf(DriverNumber3.getText());
                        DNumber4 = String.valueOf(DriverNumber4.getText());
                        IN = String.valueOf(IdentifyNumber.getText());

                        DBirth = Y + M + D;
                        DNumber = DNumber1 + DNumber2 + DNumber3 + DNumber4;


                        try {
                            postDataParam.put("Name", DN);  // 운전자 이름
                            postDataParam.put("Birth", DBirth);  // 운전자 생년월일
                            postDataParam.put("DriverNumber", DNumber); // 면허증 번호
                            postDataParam.put("IdentifyNumber", IN);   // 식별번호

                            // 실행
                            new LicenseInsertData(getActivity()).execute(postDataParam);

                            Log.e("전화번호", TempOfKiwi.PhoneNumber);
                        } catch (JSONException e) {
                            Log.e("LicenseFragment", "JSONEXception");
                        }

                    }
                    break;

            }
        }
    }

}
