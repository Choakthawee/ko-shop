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
  
  db.query("INSERT INTO user_info (username,password,email) VALUES (?,?,?)",
  [username,password,email],
  (err,result) =>{
    if(err){
      res.status(400).send("Error");
    }else{
      res.status(200).send("Values inserted");
    }
  }
  )
})

// เริ่มต้นเซิร์ฟเวอร์ Express

app.listen('3001',()=>{
  console.log('เซิร์ฟเวอร์ Express กำลังทำงานที่พอร์ต 3001' , );
});


