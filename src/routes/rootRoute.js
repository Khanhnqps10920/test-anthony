const express = require('express');
const rootRoute = express.Router();

const userRoute = require('./userRoute');
const imageRoute = require('./imageRoute');
const commentRoute = require('./commentRoute');
const storeRoute = require('./storeRoute');


rootRoute.use("/users", userRoute);
rootRoute.use("/image", imageRoute);
rootRoute.use("/comment", commentRoute);
rootRoute.use("/store", storeRoute);


module.exports = rootRoute;