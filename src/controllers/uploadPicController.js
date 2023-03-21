const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/img/pic");
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + "-" + file.originalname; 
        cb(null, newFileName);
    }
})
const upload = multer({ storage });

module.exports = upload;