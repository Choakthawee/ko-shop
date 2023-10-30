import React, { useState } from 'react';
import './rov.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import videoBg from '../images/Halloween.mp4';
import { Form, Button } from 'react-bootstrap';
import counpon1 from '../rov-coupon/coupon1.png'
import counpon2 from '../rov-coupon/coupon2.png'
import counpon3 from '../rov-coupon/coupon3.png'
import counpon4 from '../rov-coupon/coupon4.png'
import counpon5 from '../rov-coupon/coupon5.png'
import counpon6 from '../rov-coupon/coupon6.png'
import counpon7 from '../rov-coupon/coupon7.png'
import counpon8 from '../rov-coupon/coupon8.png'
import counpon9 from '../rov-coupon/coupon9.png'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const Rov = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userID,setuserID] = useState('');
  const [userPass,setuserPass] = useState('');
  const handleImageClick = (index, price) => {
    if (index === clickedIndex) {
      setClickedIndex(null);
      setTotalPrice(0);
    } else {
      setClickedIndex(index);
      setTotalPrice(price);
    }
  };

  const images = [
    { src: counpon1, text: '40.00' },
    { src: counpon2, text: '72.00' },
    { src: counpon3, text: '120.00' },
    { src: counpon4, text: '225.00' },
    { src: counpon5, text: '375.00' },
    { src: counpon6, text: '700.00' },
    { src: counpon7, text: '1,050.00' },
    { src: counpon8, text: '1,400.00' },
    { src: counpon9, text: '2,100.00' },
  ];
  const handlePurchaseConfirmation = () => {
    const loggedInUsername = localStorage.getItem('username');
    
    if (loggedInUsername !==null && totalPrice>0 && userID !== "" && userPass !== "") {
      axios.post('http://localhost:3001/deductMoney', {
        username: loggedInUsername,
        amount: totalPrice 
        
      })
      .then((response) => {
        
        Swal.fire({
          icon: 'success',
          title: response.data,
          text: 'คูปองเข้าเกมแล้ว',
        });
        // อัพเดท UI หรือทำการดำเนินการเพิ่มเติมตามตอบรับ
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'ผิดพลาด',
          text: 'จำนวนเงินของคุณไม่พอกรุณาเติมเงินเพิ่ม',
        });
      });
    } else {
      if(userID == ""){
        Swal.fire({
          icon: 'error',
          title: 'ผิดพลาด',
          text: 'กรุณากรอก ID ',
        });
      }
      else if(userPass ==""){
        Swal.fire({
          icon: 'error',
          title: 'ผิดพลาด',
          text: 'กรุณากรอก Password ',
        });
      }
      else if(totalPrice ==""){
        Swal.fire({
          icon: 'error',
          title: 'ผิดพลาด',
          text: 'กรุณาเลือกจำนวนที่ต้องการซื้อ',
        });
      }
      
      // จัดการ UI เพื่อแจ้งให้ผู้ใช้เลือกจำนวนและเข้าสู่ระบบ
    }
  };
  return (
    <div className="valorantScreen">
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <h2 className='form-section__circle' data-aos="fade-up">
        <span className='form-section__number'>1</span>
        <span className='form-section__name'>กรุณากรอก ID+PASSWORD</span>
      </h2>
      <div className='valorantContainer' style={{ flexDirection: 'column' }} data-aos="fade-up" data-aos-delay = "0">
        <div style={{ marginLeft: '2rem', marginTop: '10px' }} >
          <Form.Group style={{ marginBottom: '10px' }}>
            <Form.Control
              type='text'
              name='username'
              placeholder='กรุณากรอก ID'
              className='rovInput'
              onChange={(event) => {
                setuserID(event.target.value)
              }}
            />
          </Form.Group>
        </div>
        <div style={{ marginLeft: '2rem', marginTop: '10px' ,marginBottom:'20px'}} >
          <Form.Group style={{ marginBottom: '10px' }}>
            <Form.Control
              type='text'
              name='username'
              placeholder='กรุณากรอก Password'
              className='rovInput'
              onChange={(event) => {
                setuserPass(event.target.value)
              }}
            />
          </Form.Group>
        </div>
      </div>

      <h2 className='form-section__circle' style={{ marginTop: '3%' }} data-aos="fade-up" data-aos-delay = "100">
        <span className='form-section__number'>2</span>
        <span className='form-section__name'>เลือกจำนวนที่ต้องการเติม</span>
      </h2>

      <div className='valorantContainer' data-aos="fade-up" data-aos-delay = "100">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-box ${index === clickedIndex ? 'clicked' : ''}`}
            onClick={() => handleImageClick(index, image.text.replace(",",""))}
          >
            <img src={image.src} alt={image.text} />
            <p>฿{image.text}</p>
          </div>
        ))}
      </div>

      <h2 className='form-section__circle' style={{ marginTop: '3%' }}>
        <span className='form-section__number'>3</span>
        <span className='form-section__name'>ยืนยันคำสั่งซื้อ</span>
      </h2>
      
      <div className='checkboxValo'>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '2rem' }}>รวมทั้งสิ้น : ฿{totalPrice} บาท</p>
          <Button className="button" type="button" onClick={handlePurchaseConfirmation} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '2%', borderWidth: '0' }}>
            <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 5 }} /> ยืนยันคำสั่งซื้อ
          </Button>
      </div>
    </div>
  );
}

export default Rov;