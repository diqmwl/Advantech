package com.hansung.android.kiwi;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.w3c.dom.Text;


public class ServiceCenterFragment extends Fragment {


    public ServiceCenterFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {


        LinearLayout ServiceCenterFragment = (LinearLayout) inflater.inflate(R.layout.fragment_service_center, container, false);

        LinearLayout Call = (LinearLayout) ServiceCenterFragment.findViewById(R.id.ServiceCenter_Fragment_Call);

        LinearLayout GoToGuide = (LinearLayout) ServiceCenterFragment.findViewById(R.id.ServiceCenter_Fragment_Guide);

        LinearLayout Term = (LinearLayout) ServiceCenterFragment.findViewById(R.id.ServiceCenter_Fragment_Term);

        LinearLayout Alliance = ServiceCenterFragment.findViewById(R.id.ServiceCenter_Fragment_Alliance);



        Log.e("guide", "되냐?");


        Alliance.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Intent GoToTermActivityintent = new Intent(getContext(), TermActivity.class);
////                startActivity(GoToTermActivityintent);  // 액티비티 이동
            }
        });

        Term.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent GoToTermActivityintent = new Intent(getContext(), TermActivity.class);
                startActivity(GoToTermActivityintent);  // 액티비티 이동

            }
        });

        Call.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String tel = "tel:01027491346";
                startActivity(new Intent("android.intent.action.DIAL", Uri.parse(tel)));
            }
        });

        GoToGuide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.e("guide", "되냐?2");
                Intent intent = new Intent(getActivity(), GuideActivity.class);
                startActivity(intent);
            }
        });

        // Inflate the layout for this fragment
        return ServiceCenterFragment;
    }

}
