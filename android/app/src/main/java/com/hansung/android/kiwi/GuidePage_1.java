package com.hansung.android.kiwi;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.w3c.dom.Text;

public class GuidePage_1 extends android.support.v4.app.Fragment {


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // inflater

        LinearLayout linearLayout = (LinearLayout) inflater.inflate(R.layout.viewpagerlayout, container, false);
        // LinearLayout background=(LinearLayout)linearLayout.findViewById(R.id.background);
        TextView PageName = linearLayout.findViewById(R.id.viewpager_PageName);
        TextView Explain = linearLayout.findViewById(R.id.viewpager_Explain);
        TextView Caution = linearLayout.findViewById(R.id.viewpager_caution);
        Button NextBTN = linearLayout.findViewById(R.id.viewpager_NextBTN);
        Button CancleBTN = linearLayout.findViewById(R.id.viewpager_CancleBTN);
        ImageView ImageView = linearLayout.findViewById(R.id.viewpager_Image);

        PageName.setText("키위 이용하기");
        Explain.setText("내주변에 있는 키위를 찾아 \n 이용시작 버튼을 눌러 잠금을 해제해 주세요.");
        Caution.setText("키위가 작동합니다!");

       // ImageView.setImageResource(R.id.);

        NextBTN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                GuideActivity.cur_fragment = new GuidePage_2();
            }
        });

        CancleBTN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                getActivity().finish();  // 액티비티 종료
            }
        });






        return linearLayout;
    }
}