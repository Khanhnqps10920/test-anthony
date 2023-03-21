const express = require('express');
const storeRoute = express.Router();
const { checkToken } = require('../controllers/authController');

const { 
    imageSaveYet, saveImage, savedImageByUserId
} = require('../controllers/storeController');

storeRoute.get("/imageSaveYet/:image_id", checkToken, imageSaveYet);
storeRoute.post("/saveImage/:image_id", checkToken, saveImage);
storeRoute.get("/savedImageByUserId/:user_id", checkToken, savedImageByUserId);

module.exports = storeRoute;