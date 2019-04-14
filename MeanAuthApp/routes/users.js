const request = require('request');
const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const BikeStorage = require('../models/BikeStorage');
const Bike = require('../models/Bike');
const Admin = require('../models/Admin');
const Board = require('../models/Board');
const Reply = require('../models/Reply');
const GpsService = require('../models/GpsService')

//핸드폰인증
router.post('/smsAuth', function(req, res, next) {
  var rand;
  const phonenumber = req.body.phonenumber;
  User.smsAuth(phonenumber, (result, err) => {
    res.send(result.toString());
  })
})

//회원가입

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<
//유저로그인
router.post('/authenticate', function(req, res, next) {
  const phoneid = req.body.phoneid;
  User.userCheck(phoneid, (err, result) => {
    console.log(result+"이건 유저체크");
    if(result == null) {
      const newUser = new User();
      newUser.phoneid = phoneid; newUser.license_num = "0";
      newUser.license_identify = "0"; newUser.license_birth = "0";
      newUser.license_name = "0";
      User.addUser(newUser);
      res.send("register");
      console.log("회원가입 성공");
    } else {
      res.send("success");
      console.log("로그인 성공");
    }
  })

});
//유저정보보내기
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
//유저정보보내기
router.get('/userinfor', (req, res,next) => {
  User.getUser((err, User) => {
    res.json(User);
  });
});

//어드민로그인
router.post('/adminlogin', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body.email);
  console.log(req.body.password);
  
  Admin.getAdmin(email, (err, admin) => {
    // if(err) throw err;
    if(!admin) {
     return res.json('0');
    }
    
   Admin.comparePassword(password, admin.password, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: admin}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          admin: {
             id: admin._id,
            name: admin.name,
            email: admin.email,
            license_num: admin.license_num,
            license_issued: admin.license_issued,
            license_expiration: admin.license_expiration
          }
        });
      } else {
        return res.json('0');
      }
    })
  })
});

//bike예약기능
router.post('/reserve', function(req, res, next) {

  const name = req.body.name;
  const email = req.body.email;
  console.log(name);
  console.log(email);
  Bike.change(name,email,(err, user) => {
	if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//bike예약취소
router.post('/cancel', function(req, res, next) {

  const name = req.body.name;
  console.log(name);
  Bike.cancel(name,(err, user) => {
    if(err){
      res.json({success: false, msg:'Failed', err: err})
    } else {
      res.json({success: true, msg:'registered'})
    }
  });
});

//qna보내기
router.get('/board', (req, res,next) => {
  Board.getBoardAll((err, Board) => {
    res.json(Board);
  });
});

//게시물삭제
router.post('/removeboard', (req, res,next) => {
  const title = req.body.title;
  console.log(title);

  Board.remove(title,(err, name) => {
    res.json('success');
  });
});

//어드민에서유저삭제
router.post('/removeuser', (req, res,next) => {
  const email = req.body.email;
  console.log(email);

  User.remove(email,(err, name) => {
    res.json('success');
  });
});

//qna추가
router.post('/addBoard', function(req, res, next) {

  const newBoard = new Board({
    title: req.body.content,
    username: req.body.username,
    content: req.body.title
  });

  console.log(newBoard);

  Board.addBoard(newBoard, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
	}
  });
});



//reply정보보내기
router.get('/reply', (req, res,next) => {
  Reply.getReply((err, Reply) => {
    console.log(Reply);
    res.json(Reply);
  });
});

//reply쓰기
router.post('/addreply', function(req, res, next) {

  const newreply = new Reply({
    title: req.body.title,
    reply: req.body.reply
  });

  console.log(newreply);

  Reply.addReply(newreply, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//gps정보
router.get('/gpsinfor', (req, res,next) => {
  GpsService.getGps((err, GpsService) => {
    console.log(GpsService);
    res.json(GpsService);
  });
});
//==================================================>
router.post('/addlicense', function(req, res, next) { 
  const newUser = new User({
  phoneid: req.body.phoneid,
  license_num: req.body.license_num,
  license_name: req.body.license_name,
  license_birth: req.body.license_birth,
  license_identify: req.body.license_identify
  });
  User.modifyUser(newUser, (err, user) => {
    if(err){
      res.send("0") //에러
    } else {
      res.send("1") //성공
    }
  });
});


router.get('/test', (req, res,next) => {

//request("https://portal-rmm-iw-kiwi-default-space.wise-paas.io/rmm/packagecontrol/cluster/package/uploadstatus?stgId=1&names=0&names=0", function(err, res, body) {
//console.log(body); });

var jsonDataObj = {
"username": "arc9367@gmail.com",
"password": "Zhsks9367!"
//"redirectUri": "http://ec2-18-219-8-38.us-east-2.compute.amazonaws.com/users/test"
}
request.post({
  headers: {'content-type': 'application/json', 'accept-type':'application/json'},
  url:     'https://portal-sso.wise-paas.com/v2.0/auth/native',
  json: true,
  body:    jsonDataObj,
}, function(error, response, body){
  console.log(body);
//  console.log(response);
  res.end()
})
})
module.exports = router;

