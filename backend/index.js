const express = require('express');
const bodyParser =require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    next();
});
app.use(express.json());

// กำหนดการเชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ko-shop'
});

// เชื่อมต่อกับ MySQL
db.connect(err => {
  if (err) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL: ' + err);
    return;
  }
  console.log('เชื่อมต่อกับ MySQL สำเร็จ');
});


// เริ่มต้นเซิร์ฟเวอร์ Express
const port = 3001;
app.listen(port,function(){
  console.log('เซิร์ฟเวอร์ Express กำลังทำงานที่พอร์ต ' , port);
});
