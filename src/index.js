const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("."));

const cors = require('cors');
app.use(cors());

app.listen(8080); 

// import rootRoute
const rootRoute = require('./routes/rootRoute');
app.use("/api",rootRoute)





// // file system
// const fs = require('fs');

// console.log(__dirname); // => trả về đường dẫn file của bạn đang đứng
// console.log(process.cwd()); // => trả về đường dẫn gốc của project


// // tạo một file
// fs.writeFile(process.cwd() + "/text.txt", "hello node 28", (err) => { });
// // đọc file
// fs.readFile(process.cwd() + "/text.txt", "utf-8", (err, data) => {
//     console.log(data)
// })
// // xóa file
// fs.unlink(process.cwd() + "/text.txt", (err) => { })


// khi lưu xuống database
//  localhost:8080/public/img/

// chỉ lưu tên hình xuống database
// img.jpeg

// <img src = "${URL_BACKEND}${user.avatar}" />

// yarn add mysql2
// const mysql = require('mysql2');

// const conn = mysql.createConnection({
//     host: "localhost",
//     database: "db_node28",
//     user: "root",
//     password: "1234",
//     port: 3306
// })

//sequelize-auto -h localhost -d db_pinterest -u root -x 1234-pw -p 3306 --dialec mysql -o src/models -l es6





// yarn add multer




// const express = require('express');
// const app = express();
// app.use(express.json());

//yarn add swagger-ui-express swagger-jsdoc

// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');

// // const rootRouter = require('./routes/index');
// // app.use("/api", rootRouter);
// // localhost:8080/api-docs

// const options = {
//     definition: {
//         info: {
//             title: "Swagger node 28",
//             version: "1.0.0"
//         }
//     },
//     apis: ["src/swagger/index.js"]
// }

// const specs = swaggerJsDoc(options);

// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));




