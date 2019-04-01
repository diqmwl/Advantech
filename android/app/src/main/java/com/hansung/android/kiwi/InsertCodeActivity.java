package com.hansung.android.kiwi;

import android.app.Activity;
import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;

import org.json.JSONException;
import org.json.JSONObject;

public class InsertCodeActivity extends AppCompatActivity {
    String Code = null;
    static Activity mActivity;  // 액티비티 지정
    final EditText[] CodeEditText = new EditText[4];

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_insert_code);
        mActivity = this;  // 다른곳에서 이 액티비티를 사용하기 위해 지정

        findViewById(R.id.InsertCode_Activity_left_arrow).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        CodeEditText[0] = findViewById(R.id.InsertCode_Activity_CodeEditText1);
        CodeEditText[1] = findViewById(R.id.InsertCode_Activity_CodeEditText2);
        CodeEditText[2] = findViewById(R.id.InsertCode_Activity_CodeEditText3);
        CodeEditText[3] = findViewById(R.id.InsertCode_Activity_CodeEditText4);

        CodeEditText[0].setOnTouchListener(new Touch());
        CodeEditText[1].setOnTouchListener(new Touch());
        CodeEditText[2].setOnTouchListener(new Touch());
        CodeEditText[3].setOnTouchListener(new Touch());

        CodeEditText[0].addTextChangedListener(new GenericTextWatcher(CodeEditText[0]));
        CodeEditText[1].addTextChangedListener(new GenericTextWatcher(CodeEditText[1]));
        CodeEditText[2].addTextChangedListener(new GenericTextWatcher(CodeEditText[2]));
        CodeEditText[3].addTextChangedListener(new GenericTextWatcher(CodeEditText[3]));
    }


    public class Touch implements View.OnTouchListener {

        @Override
        public boolean onTouch(View view, MotionEvent motionEvent) {
            switch(view.getId()) {
                case R.id.InsertCode_Activity_CodeEditText1:
                    for (int i=0; i<4; i++) CodeEditText[i].setText(null);
                    break;
                case R.id.InsertCode_Activity_CodeEditText2:
                    for (int i=1; i<4; i++) CodeEditText[i].setText(null);
                    break;
                case R.id.InsertCode_Activity_CodeEditText3:
                    for (int i=2; i<4; i++) CodeEditText[i].setText(null);
                    break;
            }
            return false;
        }
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
                case R.id.InsertCode_Activity_CodeEditText1:
                    if(CodeEditText[0].length()==1){  // edit1  값의 제한값을 6이라고 가정했을때
                        CodeEditText[1].requestFocus(); // 두번째EditText 로 포커스가 넘어가게 됩니다
                    }
                    break;
                case R.id.InsertCode_Activity_CodeEditText2:
                    if(CodeEditText[1].length()==1){  // edit1  값의 제한값을 6이라고 가정했을때
                        CodeEditText[2].requestFocus(); // 두번째EditText 로 포커스가 넘어가게 됩니다
                    }
                    break;
                case R.id.InsertCode_Activity_CodeEditText3:
                    if(CodeEditText[2].length()==1){  // edit1  값의 제한값을 6이라고 가정했을때
                        CodeEditText[3].requestFocus(); // 두번째EditText 로 포커스가 넘어가게 됩니다
                    }
                    break;
                case R.id.InsertCode_Activity_CodeEditText4:
                    if(CodeEditText[2].length()==1){  // edit1  값의 제한값을 6이라고 가정했을때
                        Code = "";
                        for (int i = 0; i<4; i++) Code = Code + CodeEditText[i].getText().toString();
                        Log.e("InsertCodeActivity", Code);

                        if (TempOfKiwi.AuthCode.equals(Code)) {   // 코드가 맞다면 서버에 전화번호를 보내기
                            JSONObject postDataParam = new JSONObject();

                            try {
                                postDataParam.put("phonenumber", TempOfKiwi.PhoneNumber);
                                // 실행

                                new LoginInsertData(InsertCodeActivity.this).execute(postDataParam);


                            } catch (JSONException e) {
                                Log.e("InsertCodeActivity", "JSONEXception");
                            }

                        } else {
                            AlertDialog.Builder builder = new AlertDialog.Builder(InsertCodeActivity.this);
                            builder.setTitle("코드 에러").setMessage("코드를 정확하게 확인해 주세요")
                                    .setPositiveButton("확인", new DialogInterface.OnClickListener() {
                                        public void onClick(DialogInterface dialog, int whichButton) {
                                            for (int i = 0; i<4; i++) CodeEditText[i].setText("");
                                            CodeEditText[0].requestFocus();
                                        }
                                    }).show();

                        }
                    }
                    break;
            }
        }
    }
}


