const express = require('express');
const imageRoute = express.Router();

const { checkToken } = require('../controllers/authController');
const upload = require('../controllers/uploadPicController');
const { 
    uploadPic, getImages, searchImageByName, getImageById, createdImageByUserId, deleteImage
} = require('../controllers/imageController');



imageRoute.post("/uploadPic", checkToken, upload.single("pic"), uploadPic);
imageRoute.get("/getImages", getImages);
imageRoute.get("/searchImageByName/:search", checkToken, searchImageByName);
imageRoute.get("/getImageById/:image_id", checkToken, getImageById);
imageRoute.get("/createdImageByUserId/:user_id", checkToken, createdImageByUserId);
imageRoute.delete("/deleteImage/:image_id", checkToken, deleteImage);

module.exports = imageRoute;