const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Bike = require('../models/Bike');

//=======================================>

router.get('/infor', (req, res,next) => {
  Bike.getBikeAll((err, Bike) => {
    res.json(Bike);
  });
});

//==================================================>
//교환소정보보내기
router.get('/BikeStorage', (req, res,next) => {
  BikeStorage.getBikeStorageAll((err, BikeStorage) => {
    console.log(BikeStorage);
    res.json({BikeStorage: BikeStorage});
  });
});


//bike정보보내기
router.get('/Bike', (req, res,next) => {
  Bike.getBikeAll((err, Bike) => {
    console.log(Bike);
    res.send(Bike);
  });
});

module.exports = router;
