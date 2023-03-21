const { successCode, failCode, errorCode } = require("../config/response");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const { decodeToken } = require("../config/jwt");
const model = initModels(sequelize);

// User upload pic (in image and store tables)
const uploadPic = async (req, res) => {
  try {
    const file = req.file;
    let { image_name, image_desc } = req.body;
    const { token } = req.headers;
    const user = decodeToken(token).data;

    let modelImage = {
      image_name,
      image_link: "http://localhost:8080/public/img/pic/" + file.filename,
      image_desc,
      user_id: user.user_id,
    };

    let objImage = await model.image.create(modelImage);

    let modelStore = {
      image_id: objImage.image_id,
      user_id: objImage.user_id,
      store_date: Date.now(),
    };

    await model.store.create(modelStore);

    successCode(res, objImage, modelStore, "Update successful");
  } catch (err) {
    console.log(err);
    errorCode(res, "Error BE");
  }
};

// Get all images
const getImages = async (req, res) => {
  try {
    let data = await model.image.findAll();

    if (!data) {
      throw new Error("cant not found")
    }

    successCode(res, data, "Get images successful");
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

const searchImageByName = async (req, res) => {
  try {
    let { search } = req.params;
    let result = "No image was found"
    let data = await model.image.findAll({
      where: {
        image_name: {
          [Op.substring]: search, //   [Op.substring]: search
        },
      },
    });
    if (data) {
      result = "Search images successful"
    } 
    successCode(res, data, result);
    
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

// Get image info and user info by image_id
const getImageById = async (req, res) => {
  try {
    let { image_id } = req.params;

    let data = await model.image.findOne({
      where: {
        image_id,
      },
      include: ["user"],
    });
    successCode(res, data, "Search image by id with user info successful");
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

// Get all images created by user_id
const createdImageByUserId = async (req, res) => {
  try {
    let { user_id } = req.params;

    let data = await model.image.findAll({
      where: {
        user_id,
      },
    });

    successCode(res, data, "Images created by user_id");
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

// Delete image in 3 tables
const deleteImage = async (req, res) => {
  try {
    let { image_id } = req.params;
    let result = "Image deleted successful";

    let data = await model.image.findOne({
      where: {
        image_id,
      },
    });

    const fs = require("fs");
    if (data) {
      fs.unlink(
        process.cwd() + "/public/img/pic/" + data.image_name,
        (err) => {}
      );

      await sequelize.transaction(async (t) => {
        await model.comment.destroy(
          { where: { image_id } },
          { transaction: t }
        );
        await model.store.destroy({ where: { image_id } }, { transaction: t });
        await model.image.destroy({ where: { image_id } }, { transaction: t });
      });
    } else {
      result = "Image not found";
    }

    successCode(res, "", result);
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

module.exports = {
  uploadPic,
  getImages,
  searchImageByName,
  getImageById,
  createdImageByUserId,
  deleteImage,
};
