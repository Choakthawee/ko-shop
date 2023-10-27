const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// กำหนดการเชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ko-shop'
});


//รับข้อมูล
app.get('/user_info',(req,res)=>{
  db.query("SELECT * FROM user_info", (err, result) =>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

app.post('/create', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const email = req.body.email;
  
  // เพิ่มเงื่อนไขเพิ่มเติม
  if (!username || !password || !confirmPassword || !email) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  if (password.length < 8 || password.length > 20) {
    return res.status(400).send("รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน");
  }

  if (!email.includes('@')) {
    return res.status(400).send("อีเมลไม่ถูกต้อง");
  }

  // หลังจากตรวจสอบข้อมูลให้ดำเนินการเพิ่มข้อมูลลงในฐานข้อมูล
  db.query("INSERT INTO user_info (username, password, email) VALUES (?, ?, ?)", [username, password, email], (err, result) => {
    if (err) {
      return res.status(400).send("เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
    } else {
      return res.status(200).send("ค่าถูกเพิ่มเข้าสู่ฐานข้อมูล");
    }
  });
});

// เริ่มต้นเซิร์ฟเวอร์ Express

app.listen('3001',()=>{
  console.log('เซิร์ฟเวอร์ Express กำลังทำงานที่พอร์ต 3001' , );
});


