const DataTypes = require("sequelize").DataTypes;
const _comment = require("./comment");
const _image = require("./image");
const _store = require("./store");
const _users = require("./users");

function initModels(sequelize) {
  const comment = _comment(sequelize, DataTypes);
  const image = _image(sequelize, DataTypes);
  const store = _store(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  comment.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(comment, { as: "comments", foreignKey: "image_id"});
  store.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(store, { as: "stores", foreignKey: "image_id"});
  comment.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comment, { as: "comments", foreignKey: "user_id"});
  image.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(image, { as: "images", foreignKey: "user_id"});
  store.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(store, { as: "stores", foreignKey: "user_id"});

  return {
    comment,
    image,
    store,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
