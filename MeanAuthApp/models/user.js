const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
var https = require("https");

// User Schema
const UserSchema = mongoose.Schema({
  phoneid: {
    type: String,
    required: true,
    unique:true
  },
  license_num: {
    type: String,
    required: true
  },
  license_identify: {
    type: String,
    required: true
  },
  license_birth: {
    type: String,
    required: true
  },
  license_name: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser){
  console.log(newUser);
  newUser.save(function(err){
    if(err){
      console.log("회원가입 실패");
    } else {
      console.log("회원등록 성공");
    }
  });
}

module.exports.modifyUser = function(newUser, callback){
  User.update({phoneid: newUser.phoneid},
    {$set: {license_num: newUser.license_num, license_birth: newUser.license_birth, license_identify: newUser.license_identify, license_name: newUser.license_name}}, callback);
}

module.exports.smsAuth = function(userPhoneNumber, callback) {
    var rand = Math.floor((Math.random() * (9999-1000+1)))+1000;
    var credential = 'Basic '+new Buffer('taeil710:dff968aa52ad11e9a0150cc47a1fcfae').toString('base64'); 
    var receiver = userPhoneNumber;
    var data = { 
    "sender"     : "01027491346", 
    "receivers"  : [receiver], 
    "content"    : "인증번호를 확인후 입력해주세요 :" + rand 
    } 
    var body = JSON.stringify(data); 
    var options = { 
    host: 'api.bluehouselab.com', 
    port: 443, 
    path: '/smscenter/v1.0/sendsms', 
    headers: { 
        'Authorization': credential, 
        'Content-Type': 'application/json; charset=utf-8', 
        'Content-Length': Buffer.byteLength(body) 
    }, 
    method: 'POST' 
    }; 
    var req = https.request(options, function(res) { 
    console.log(res.statusCode); 
    var body = ""; 
    res.on('data', function(d) { 
        body += d; 
    }); 
    res.on('end', function(d) { 
        if(res.statusCode==200) 
  	    console.log(JSON.parse(body)); 
        else 
  	    console.log(body); 
    }); 
    }); 
    req.write(body); 
    req.end(); 
    req.on('error', function(e) { 
        console.log(err);
   });
    callback(rand);
};


module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.remove = function(email, callback){
  const query = {email: email}
  User.deleteOne(query,callback);
}

module.exports.getUser = function(callback){
  User.find(callback);
}

module.exports.userCheck = function(phoneid, callback){
  User.findOne({phoneid: phoneid}, (callback));
}
