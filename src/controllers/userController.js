const { successCode, failCode, errorCode } = require("../config/response");
const upload = require("../controllers/uploadAvatarController");
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);
const { generateToken } = require("../config/jwt");
const bcrypt = require("bcrypt");

// Signup with or without avatar file
const signUp = async (req, res) => {
  try {
    const file = req.file;
    let { email, pass_word, full_name, age } = req.body;

    let checkEmail = await model.users.findOne({
      where: {
        email,
      },
    });

    let modelUser = {
      email,
      pass_word: bcrypt.hashSync(pass_word, 5),
      full_name,
      age,
      avatar: "",
    };

    if (checkEmail) {
      failCode(res, modelUser, "Email already existed !");
    } else {
      if (file) {
        upload.single("data");
        modelUser.avatar = file.filename;
      }
    }

    await model.users.create(modelUser);
    successCode(res, modelUser, "Signup successful");
  } catch (err) {
    console.log(err);
    errorCode(res, "Error BE");
  }
};

const login = async (req, res) => {
  let { email, pass_word } = req.body;

  let checkEmail = await model.users.findOne({
    where: {
      email,
    },
  });
  if (checkEmail) {
    let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);
    if (checkPass) {
      let token = generateToken({
        data: { ...checkEmail.dataValues, pass_word: "" },
      });
      successCode(res, token, "Login successful");
    } else {
      failCode(res, "", "Wrong password !");
    }
  } else {
    failCode(res, "", "Wrong email !");
  }
};

// In case no avatar was input when signUp, we can upload avatar later
const uploadAvatar = async (req, res) => {
  try {
    let { user_id } = req.params;
    const file = req.file;

    let data = await model.users.findOne({
      where: {
        user_id,
      },
    });
    let modelUser = { ...data.dataValues, avatar: file.filename };
    await model.users.update(modelUser, {
      where: {
        user_id,
      },
    });
    successCode(res, modelUser, "Update successful");
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

// get user info by user_id and full_name
const getUser = async (req, res) => {
  try {
    let { user_id, full_name } = req.body;
    let result = "No user was found"
    let data = await model.users.findOne({
      where: {
        user_id,
        full_name,
      },
    });
    if (data) {
      result = "Get user info successful"
    }
    successCode(res, data, result);
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

// If want to update avatar can use uploadAvatar
const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { email, pass_word, full_name, age, avatar } = req.body;

    let checkUser = await model.users.findOne({
      where: {
        user_id,
      },
    });

    if (!checkUser) {
      failCode(res, modelUser, "User not existed !");
    } else {
      let modelUser = {
        email,
        pass_word: bcrypt.hashSync(pass_word, 5),
        full_name,
        age,
        avatar,
      };
      await model.users.update(modelUser, {
        where: {
          user_id,
        },
      });
      successCode(res, modelUser, "Update successful");
    }
  } catch (err) {
    errorCode(res, "Error BE");
  }
};

module.exports = {
  signUp,
  login,
  getUser,
  updateUser,
  uploadAvatar,
};
