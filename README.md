# WEB-PROJECT (KO-SHOP)

# ขั้นตอนการติดตั้งเว็ปเติมเกมส์
1. **ให้โหลด database ที่ชื่อว่า ko-shop แล้ว import ลงใน mysql**
1. **จากนั้นโหลด xampp เพื่อในการเปิดใช้งาน Apache และใช้งาน Mysql ที่มี database ที่ลงไว้**
1. **clone code ลงใน VS Code จาก** [ลิ้งนี้](https://github.com/Choakthawee/ko-shop) **แล้วเปิด terminal ขึ่นมา 2 อัน อันแรกพิมพ์ว่า ```bash npm start``` เพื่อเปิดหน้าเว็ป และ อีกอันให้ ```bash cd server``` แล้วพิมพ์ ```bash node index.js``` เพื่อรันในส่วนของ backend**
1. **เมื่อรันทั้งส่วนของ website และ backend ได้แล้วก็ใช้งานเว็ปไซต์ได้เลย**


# NPM INSTALL REQUEST

```bash
  npm install cors express mysql nodemon axios sweetalert2 aos bootstrap react react-bootstrap react-dom react-icons react-router-dom react-scripts styled-components
```

**ใส่คำสั่งนี้ไปใน package.json ที่อยู่ในโฟล์เดอร์ server "dev":"nodemon index"**

**จากนั้นรันโค๊ดได้ปกติ**


