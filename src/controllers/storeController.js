const { successCode, failCode, errorCode } = require("../config/response");
const { decodeToken } = require("../config/jwt");
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

// Check to see if an image has been saved
const imageSaveYet = async (req, res) => {
    try {
      let { image_id } = req.params;
      const { token } = req.headers;
      const user = decodeToken(token).data;
  
      let data = await model.store.findOne({
              where: {
                  image_id,
                  user_id: user.user_id            
              }            
      });
      let result = "You have not saved this image";

      if (data) {
        result = "You have already saved this image"
      }
      successCode(res, data, result);
      
    } catch (err) {
      errorCode(res, "Error BE");
    }
  };
// User saves (like) image
  const saveImage = async (req, res) => {
    try {
      let { image_id } = req.params;
      const { token } = req.headers;
      const user = decodeToken(token).data;
  
      let modelStore = {
        image_id, 
        user_id: user.user_id,
        store_date: Date.now()
      };

    await model.store.create(modelStore)

    successCode(res, modelStore, "Save image successful");
      
    } catch (err) {
      errorCode(res, "Error BE");
    }
  };

  // Ds ảnh đã lưu theo user_id
  const savedImageByUserId = async (req, res) => {
    try {
      let { user_id } = req.params;
      
      let data = await model.store.findAll({
        where: {          
            user_id          
        }            
});
    successCode(res, data, "Saved images by user_id");
      
    } catch (err) {
      errorCode(res, "Error BE");
    }
  };
  module.exports = {
    imageSaveYet,
    saveImage,
    savedImageByUserId
  };