package com.hansung.android.kiwi;

import android.Manifest;
import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AlertDialog;
import android.util.Log;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.afollestad.materialdialogs.DialogAction;
import com.afollestad.materialdialogs.MaterialDialog;

import com.anjlab.android.iab.v3.BillingProcessor;
import com.anjlab.android.iab.v3.Constants;
import com.anjlab.android.iab.v3.SkuDetails;
import com.anjlab.android.iab.v3.TransactionDetails;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.security.AccessController;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Map;
import java.util.zip.Inflater;

import static com.hansung.android.kiwi.LoginPostRequest.temp;
import static com.hansung.android.kiwi.MyPageGetData.TAG_name;
import static com.hansung.android.kiwi.MyPageGetData.TAG_email;

import static com.hansung.android.kiwi.WalletFragment.purchaseDialog;

public class NaviActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener, BillingProcessor.IBillingHandler {
    TempOfKiwi tempofKiwi;


    public static String car_route_station = "default";
    public static int car_route_num = 0;

    public static String BuyTicket = "false";

    private long time = 0;

    public String UserEmail;
    public String Name;
    public String key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9wr8OyrUXB57xekazfrv/" +
            "sfbV9XEC0KLh2Y+LTA2DvpNdxncdz3z79Z+grYux9hHeqCz3G1GqhUUmuGAHIG+Qh7XK3esWUfkDpJ0sn2I3I9xP/" +
            "W0M8oyCdV4NLVgXO0O4I+oUpaPTYlM6Bl7UoJOok1Frf9YZVkFc9q7EFP+84JNq2lmyRvrwqkT/" +
            "WZBghK+QLaoAvdI81vhuzMccNJkwmQJvqeseYq1fSvKPKjZ2ZgCZnpkual+jBdoHGyAmzJtmDD2dahAsq/" +
            "495cetB7tTO9xMBJ7fCq0yCSbogrKnlpcy5JdPfqv9fruT0lqC/ocaXzgQmmJ9QP4HkWwNFHjRwIDAQAB";


    private PurchaseHeartsAdapter skusAdapter;
    public BillingProcessor bp;


    public static ArrayList<SkuDetails> products = new ArrayList<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navi);

        bp = new BillingProcessor(this, key, this); //라이센스 키입력


        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
/* 플로팅버
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        */

        if (car_route_num == 1) {
            car_route_num = 0;
            Intent intent = getIntent();
            car_route_station = intent.getStringExtra("station");
        }

        if (Build.VERSION.SDK_INT >= 23) {
            if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED
                    && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 1); //위치권한 탐색 허용 관련 내용
                }
                return;
            }
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);   // 드로워블 레이아웃 설정
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);   // 메뉴연결
        navigationView.setNavigationItemSelectedListener(this);

        //처음 fragment
        android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
        ft.replace(R.id.NavFrag, new TMapFragment());  // 프래그먼트에 tmap프래그먼트 처음에 연결
        ft.commit();

        navigationView.setCheckedItem(R.id.nav_home);   // 메뉴에서 홈 체크

        UserEmail = "";
        Intent intent = getIntent();
        UserEmail = intent.getStringExtra("email");

        //   Log.d("네비메뉴 사용자이름",TAG_name);


        View header = ((NavigationView) findViewById(R.id.nav_view)).getHeaderView(0);   // 헤더라는 네비뷰 객체를 또만듦 왜만들었지??
        //new MyPageGetData((LoginActivity) LoginActivity.mContext).execute();   // 마이페이지에 채워질 정보를 가져옴 현재 로그인한 사람의 마이페이지 정보를 가져옴
        Log.d("마이페이지겟데이터-태그이름", TAG_name + "");

//        ((TextView) header.findViewById(R.id.Name)).setText(TAG_name); //메뉴에 사용자이름
//        ((TextView) header.findViewById(R.id.Email)).setText(TAG_email); //메뉴에 사용자 이메일


    }


    @Override
    public void onBackPressed() {   // 뒤로가기 버튼을 눌렀을 때의 이벤트
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            Log.e("Other", "onBack()");
            // 리스너를 설정하기 위해 Activity 를 받아옵니다.   // 백버튼을 누르면 홈 프래그먼트로 이동
            if (System.currentTimeMillis() - time >= 2000) {
                time = System.currentTimeMillis();
                Toast.makeText(getApplicationContext(), "뒤로 버튼을 한번 더 누르면 종료합니다.", Toast.LENGTH_SHORT).show();
            } else if (System.currentTimeMillis() - time < 2000) {
                finish();
            }
        }
    }

//점 세개 메뉴
//    @Override
//    public boolean onCreateOptionsMenu(Menu menu) {
//        // Inflate the menu; this adds items to the action bar if it is present.
//        getMenuInflater().inflate(R.menu.navi, menu);
//        return true;
//    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }


    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);

        switch (item.getItemId()) {
            case R.id.nav_home:
                switchFragment(0);
                drawer.closeDrawer(GravityCompat.START);
                return true;
            case R.id.nav_license:
                switchFragment(1);
                drawer.closeDrawer(GravityCompat.START);
                return true;
            case R.id.nav_share:
                switchFragment(2);
                // drawer.closeDrawer(GravityCompat.START);
                AlertDialog.Builder builder = new AlertDialog.Builder(NaviActivity.this);
                builder.setTitle("로그아웃").setMessage("로그아웃 하시겠습니까?")
                        .setPositiveButton("로그아웃", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int whichButton) {
                                finish();
                            }
                        })
                        .setNegativeButton("취소", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int whichButton) {
                            }
                        }).show();
                return true;
            case R.id.nav_send:
                switchFragment(3);
                drawer.closeDrawer(GravityCompat.START);
                return true;
            case R.id.nav_servicecenter:
                switchFragment(4);
                drawer.closeDrawer(GravityCompat.START);
                return true;

        }

        return false;

//        if (id == R.id.nav_home) { // 지도탭
//
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new TMapFragment());
//            ft.commit();
//            // Handle the camera action
//        } else if (id == R.id.nav_license) {// 결제프래그먼트로 넘어감  필요없음 운전면허 등록 프래그먼트로 교체 예정
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new LicenseFragment());
//            ft.commit();
//        }
////        else if (id == R.id.nav_notifications) {// QR코드인식 필요없음
//////            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//////            ft.replace(R.id.NavFrag, new HistoryFragment());
//////            ft.commit();
////            if(BuyTicket == "Ture") {
////                Intent intent = new Intent(NaviActivity.this, QrActivity.class);
////                startActivity(intent);
////                //finish();
////            }else{
////                String errorMessage = getString(R.string.purchase_error) + " (" + "구매를 하셔야 잠금해제를 할 수 있습니다." + ")";
////                Toast.makeText(this, "이용권을 구매해주세요!", Toast.LENGTH_LONG).show();
////            }
////
////        }
//        else if (id == R.id.nav_manage) { // 가입자 개인정보
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new MyPageFragment());
//            ft.commit();
//
//        } else if (id == R.id.nav_share) { //로그아웃
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new SettingFragment());
//            ft.commit();
//
//        } else if (id == R.id.nav_send) {//키위 바이크 소개
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new HelpFragment());
//            ft.commit();
//
//        }


    }

    final TMapFragment tMapFragment = new TMapFragment();
    final LicenseFragment licenseFragment = new LicenseFragment();
//    final MyPageFragment myPageFragment = new MyPageFragment();
//    final SettingFragment settingFragment = new SettingFragment();
    final HelpFragment helpFragment = new HelpFragment();
    final ServiceCenterFragment serviceCenterFragment = new ServiceCenterFragment();

    public void switchFragment(int id) {   //프래그먼트 교체 메서드
        final FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        if (id == 0)
            fragmentTransaction.replace(R.id.NavFrag, tMapFragment);  // 티맵
        else if (id == 1)
            fragmentTransaction.replace(R.id.NavFrag, licenseFragment);  // 운전면허 등록 프래그먼트
        else if (id == 2) {
//            fragmentTransaction.replace(R.id.NavFrag, settingFragment);  // 로그아웃으로 연결되는 프래그먼트인데 이거 필요없어보임 추후 삭제예정
        } else if (id == 3)
            fragmentTransaction.replace(R.id.NavFrag, helpFragment); //
        else if (id == 4)
            fragmentTransaction.replace(R.id.NavFrag, serviceCenterFragment); // 고객센터 프래그먼트로 교체

        fragmentTransaction.commit();
    }


    @Override
    public void onBillingInitialized() {

        SkuDetails product;
        product = bp.getPurchaseListingDetails("onehour_ticket"); //1시간이용권등록


        products.add(product);
        Log.d("한시간프로덕스id", products.get(0).productId);
        Log.d("한시간프로덕스", products.toString());

        product = bp.getPurchaseListingDetails("twohour_ticket");
        products.add(product);
        Log.d("두시간프로덕시id", products.get(1).productId);
        Log.d("두시간프로덕스", products.toString());


//         Sort ascending order
//        Collections.sort(products, new Comparator<SkuDetails>() {
//            @Override
//            public int compare(SkuDetails o1, SkuDetails o2) {
//                if (o1.priceLong > o2.priceLong) {
//                    return 1;
//                } else if (o1.priceLong < o2.priceLong) {
//                    return -1;
//                } else return 0;
//            }
//        });

        // 결제 아이템 다이얼로그 설정
        skusAdapter = new PurchaseHeartsAdapter(this);
        View purchaseView = getLayoutInflater().inflate(R.layout.layout_dialog_heartstore, null);
        ListView lvSkus = purchaseView.findViewById(R.id.lv_skus);
        lvSkus.setAdapter(skusAdapter);

        purchaseDialog = new MaterialDialog.Builder(this) //getContext()와 같다
                .customView(purchaseView, false)
                .negativeText("취소")
                .onNegative(new MaterialDialog.SingleButtonCallback() {
                    @Override
                    public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
                        dialog.dismiss();
                    }
                })
                .build();
        skusAdapter.update(products);
    }

    public void purchaseProduct(final String productId) {//어댑터 클래스에서 productId를 넘겨받고 결제성공하면 onProductPurchased
        //취소하면 onBillingError
        Log.d("purchase메소드실행전", productId);
        if (bp.isPurchased(productId)) {//이미 구매한 항목이있으면
            Log.d("purchaseProduct메소드", String.valueOf(bp.isPurchased(productId)));
            bp.consumePurchase(productId);//즉각소비 하고 true 리턴
            Log.d("컨슈머퍼체이스", String.valueOf(bp.consumePurchase(productId)));
        }
        bp.purchase(this, productId);
        BuyTicket = "Ture"; //구매를 하면 Ture 로 바꿔줌
        Log.d("purchase", String.valueOf(bp.purchase(this, productId))); //최종구매누르면 나옴 지금은 *오류 요청하신 항목은 구매할 수 없습니다.

    }

    @Override
    public void onProductPurchased(@NonNull String productId, @Nullable TransactionDetails details) {
// 구매가 성공되면 호출
        Log.d("onProductPurchased", productId);
        SkuDetails sku = bp.getPurchaseListingDetails(productId);
        Log.d("스쿠값", sku.toString());

        BuyTicket = "Ture"; //구매를 하면 Ture 로 바꿔줌

        // 하트 100개 구매에 성공하였습니다! 메세지 띄우기
        String purchaseMessage = sku.title + getString(R.string.purchase_succeed);
        //  Common.showMessage(this, getCurrentFocus(), purchaseMessage);

        // 구매 처리
        int amount = 0;
        try {

            amount = Integer.parseInt(productId.substring(1));
            // userStore.purchaseHearts(amount, tvNavigationHearts);
        } catch (Exception e) {
            Toast.makeText(this, R.string.purchase_error, Toast.LENGTH_LONG).show();
            e.printStackTrace();
        }
    }

    @Override
    public void onBillingError(int errorCode, @Nullable Throwable error) {
        if (errorCode != Constants.BILLING_RESPONSE_RESULT_USER_CANCELED) {
            String errorMessage = getString(R.string.purchase_error) + " (" + errorCode + ")";
            Toast.makeText(this, errorMessage, Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onPurchaseHistoryRestored() {//??

    }


}
