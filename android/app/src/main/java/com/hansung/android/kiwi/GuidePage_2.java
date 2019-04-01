package com.hansung.android.kiwi;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

public class GuidePage_2 extends android.support.v4.app.Fragment {


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        LinearLayout linearLayout = (LinearLayout) inflater.inflate(R.layout.viewpagerlayout, container, false);
        // LinearLayout background=(LinearLayout)linearLayout.findViewById(R.id.background);

        TextView PageName = linearLayout.findViewById(R.id.viewpager_PageName);
        TextView Explain = linearLayout.findViewById(R.id.viewpager_Explain);
        TextView Caution = linearLayout.findViewById(R.id.viewpager_caution);
        Button NextBTN = linearLayout.findViewById(R.id.viewpager_NextBTN);
        Button CancleBTN = linearLayout.findViewById(R.id.viewpager_CancleBTN);
        ImageView ImageView = linearLayout.findViewById(R.id.viewpager_Image);

        PageName.setText("헬멧 착용");
        Explain.setText("안전한 이용을 위해 \n 헬멧을 꼭 착용해 주세요.");
        Caution.setText("");

       // ImageView.setImageResource(R.id.);

        NextBTN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // GuideActivity.cur_fragment = new GuidePage_2();  //다음페이지
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