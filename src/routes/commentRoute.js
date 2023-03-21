const express = require('express');
const commentRoute = express.Router();

const { checkToken } = require('../controllers/authController');

const { 
    upComment, getCommentByImageId
} = require('../controllers/commentController');



commentRoute.post("/upComment/:image_id", checkToken, upComment);
commentRoute.get("/getCommentByImageId/:image_id", checkToken, getCommentByImageId);

module.exports = commentRoute;