package com.hansung.android.kiwi;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class GuideActivity extends AppCompatActivity {

    int MAX_PAGE = 8;
    static Fragment cur_fragment = new Fragment();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_guide);

        ViewPager viewPager = (ViewPager) findViewById(R.id.viewpager);
        viewPager.setAdapter(new adapter(getSupportFragmentManager()));

    }


    private class adapter extends FragmentPagerAdapter {
        public adapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            if (position < 0 || MAX_PAGE <= position)
                return null;
            switch (position) {
                case 0:
                    cur_fragment = new GuidePage_1();
                    break;
                case 1:
                    cur_fragment = new GuidePage_2();
                    break;
//                case 2:
//                    cur_fragment = new AdvPage_3();
//                    break;
//                case 3:
//                    cur_fragment = new AdvPage_3();
//                    break;
//                case 4:
//                    cur_fragment = new AdvPage_3();
//                    break;
//                case 5:
//                    cur_fragment = new AdvPage_3();
//                    break;
//                case 6:
//                    cur_fragment = new AdvPage_3();
//                    break;
//                case 7:
//                    cur_fragment = new AdvPage_3();
//                    break;


            }
            return cur_fragment;
        }

        @Override
        public int getCount() {
            return MAX_PAGE;
        }
    }
}
