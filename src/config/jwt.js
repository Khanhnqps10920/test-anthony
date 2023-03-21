const jwt = require('jsonwebtoken');

// tạo token
const generateToken = (data) => {
    let token = jwt.sign(data, "private", { expiresIn: "30m" });

    return token;
}

// check token hợp lệ 
const verifyToken = (token) => {
    let checkToken = jwt.verify(token, "private");
    return checkToken;
}

const decodeToken = (token) => {
    let decode = jwt.decode(token);
    return decode;
}

module.exports = {
    generateToken,
    verifyToken,
    decodeToken
}