const { successCode, failCode, errorCode } = require("../config/response");

const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const { decodeToken } = require("../config/jwt");
const model = initModels(sequelize);

const upComment = async (req, res) => {
    try {
      let {image_id} = req.params;
      let { comment_body } = req.body;
      const { token } = req.headers;
      const user = decodeToken(token).data;
      
      let modelComment = {
        image_id,
        user_id: user.user_id,
        comment_body,
        comment_date: Date.now()
      };
  
      await model.comment.create(modelComment)
  
      successCode(res, modelComment, "Add comment successful");
  
    } catch (err) {
      console.log(err);
      errorCode(res, "Error BE");
    }
  };

  const getCommentByImageId = async (req, res) => {
    try {
      let { image_id } = req.params;
  
      let data = await model.comment.findAll({
              where: {
                  image_id            
              },
          });
      successCode(res, data, "Search comment by image id successful");
      
    } catch (err) {
      errorCode(res, "Error BE");
    }
  };
  
  module.exports = {
    upComment,
    getCommentByImageId
  };