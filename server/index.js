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
//login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query('SELECT * FROM user_info WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {
      return res.status(400).send('Something went wrong');
    }
    if (result.length > 0) {
      return res.status(200).send('Login successful');
    } else {
      return res.status(400).send('Invalid username or password');
    }
  });
})
//register
app.post('/create', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const email = req.body.email;
  
  // เพิ่มเงื่อนไขเพิ่มเติม
  if (!username || !password || !confirmpassword || !email) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  if (password.length < 8 || password.length > 20) {
    return res.status(400).send("รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร");
  }

  if (password !== confirmpassword) {
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
//topuptruemoney
app.post('/topuptruemoney', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const amount = req.body.amount;
  const username = req.body.username; // ใช้ req.user.username สำหรับรับค่า username จาก authentication
  if (phoneNumber.startsWith('0') && phoneNumber.length === 10) {
    // หากหมายเลขโทรศัพท์ขึ้นต้นด้วย "0" และมีความยาวที่ถูกต้อง
    // ให้อัปเดตข้อมูลโดยตรง
    db.query('UPDATE user_info SET money = money + ? WHERE username = ?', [amount, username], (err, result) => {
      if (err) {
        return res.status(400).send('เกิดข้อผิดพลาดในการเติมเงิน');
      } else {
        return res.status(200).send('เติมเงินสำเร็จ');
      }
    });
  } else {
    return res.status(400).send('โปรดใส่หมายเลขโทรศัพท์ที่ขึ้นต้นด้วย "0" และมีความยาว 10 หลัก');
  }
});
//topupqrcode
app.post('/topupqrcode', (req, res) => {
  const amount = req.body.amount;
  const username = req.body.username; // ใช้ req.user.username สำหรับรับค่า username จาก authentication

  // ตรวจสอบเฉพาะค่า amount และ username
  if (amount > 0) {
    // หาก amount มากกว่า 0
    // ให้อัปเดตข้อมูลโดยตรง
    db.query('UPDATE user_info SET money = money + ? WHERE username = ?', [amount, username], (err, result) => {
      if (err) {
        return res.status(400).send('เกิดข้อผิดพลาดในการเติมเงิน');
      } else {
        return res.status(200).send('เติมเงินสำเร็จ');
      }
    });
  } else {
    return res.status(400).send('กรุณาใส่จำนวนเงินที่ถูกต้อง');
  }
});

app.post('/deductMoney', (req, res) => {
  const amount = req.body.amount;
  const username = req.body.username;

  db.query("SELECT money FROM user_info WHERE username = ?", [username], (err, result) => {
    if (err) {
      return res.status(400).send('เกิดข้อผิดพลาดในการซื้อ');
    } else {
      const moneyInAccount = result[0].money;

      if (moneyInAccount < amount) {
        return res.status(400).send('เงินในบัญชีไม่เพียงพอ');
      } else {
        const remainingMoney = moneyInAccount - amount;

        if (remainingMoney < 0) {
          return res.status(400).send('การหักเงินทำให้ยอดเงินติดลบ');
        }

        db.query('UPDATE user_info SET money = ? WHERE username = ?', [remainingMoney, username], (err, result) => {
          if (err) {
            return res.status(400).send('เกิดข้อผิดพลาดในการซื้อ');
          } else {
            return res.status(200).send('การซื้อสำเร็จ');
          }
        });
      }
    }
  });
});


// เริ่มต้นเซิร์ฟเวอร์ Express

app.listen('3001',()=>{
  console.log('เซิร์ฟเวอร์ Express กำลังทำงานที่พอร์ต 3001' , );
});


