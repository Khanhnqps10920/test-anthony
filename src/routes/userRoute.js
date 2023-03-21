const express = require('express');
const { checkToken } = require('../controllers/authController');
const userRoute = express.Router();
const upload = require('../controllers/uploadAvatarController');

//import controller
const { 
    getUser,
    updateUser,
    signUp,
    login ,
    uploadAvatar
} = require('../controllers/userController');

userRoute.post("/login", login);

userRoute.post("/signUp", upload.single("data"), signUp);

userRoute.post("/uploadAvatar/:user_id", checkToken, upload.single("data"), uploadAvatar);

userRoute.get("/getUser", checkToken, getUser);

userRoute.put("/updateUser/:user_id", checkToken, updateUser);

module.exports = userRoute;