Read Me
ขั้นตอนการติดตั้งเว็ปเติมเกมส์
1.ให้โหลด database ที่ชื่อว่า ko-shop แล้ว import ลงใน mysql
2.จากนั้นโหลด xampp เพื่อในการเปิดใช้งาน apache และใช้งาน Mysql ที่มี database ที่ลงไว้
3.clone code ลงใน VS Code จากลิ้ง https://github.com/Choakthawee/ko-shop แล้วเปิด terminal ขึ่นมา 2 อัน อันนึง พิมพ์ npm start เพื่อเปิดหน้าเว็ป และ อีกอันให้ cd server แล้วพิมพ์ node index.js เพื่อรันในส่วนของ backend
4.เมื่อรันทั้งส่วนของ website และ backend ได้แล้วก็ใช้งานเว็ปไซต์ได้เลย
ในส่วนของต้องติดตั้ง 
npm install cors
npm install express
npm install mysql
npm install nodemon
npm install axios
npm install sweetalert2
npm install aos
npm install bootstrap
npm install react
npm install react-bootstrap
npm install react-dom
npm install react-icons
npm install react-router-dom
npm install react-scripts
npm install styled-components
ใส่คำสั่งนี้ไปใน package.json ที่อยู่ในโฟล์เดอร์ server "dev":"nodemon index"

แล้วถึงรันโค๊ดได้ปกติ


