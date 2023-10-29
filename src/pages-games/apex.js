import React, { useState } from 'react';
import './apex.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import videoBg from '../images/Halloween.mp4';
import { Form, Button } from 'react-bootstrap';
import apexcoin1 from '../apex-coins/apexcoin0.mp4';
import apexcoin2 from '../apex-coins/apexcoin1.mp4';
import apexcoin3 from '../apex-coins/apexcoin2.mp4';
import apexcoin4 from '../apex-coins/apexcoin3.mp4';
import apexcoin5 from '../apex-coins/apexcoin4.mp4';
import apexcoin6 from '../apex-coins/apexcoin5.mp4';

const Apex = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleImageClick = (index, price) => {
    if (index === clickedIndex) {
      setClickedIndex(null);
      setTotalPrice(0);
    } else {
      setClickedIndex(index);
      setTotalPrice(price);
    }
  };

  const videos = [
    { src: apexcoin1, text: '฿149.00'},
    { src: apexcoin2, text: '฿249.00' },
    { src: apexcoin3, text: '฿549.00' },
    { src: apexcoin4, text: '฿899.00' },
    { src: apexcoin5, text: '฿1,499.00' },
    { src: apexcoin6, text: '฿2,799.00' },
  ];

  return (
    <div className="valorantScreen">
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>

      <h2 className='form-section__circle' data-aos="fade-up">
        <span className='form-section__number'>1</span>
        <span className='form-section__name'>กรุณากรอก EA ID</span>
      </h2>

      <div className='apexContainer' style={{ flexDirection: 'column' }} data-aos="fade-up" data-aos-delay="0">
        <div style={{ marginLeft: '2rem', marginTop: '10px' }}>
          <Form.Group style={{ marginBottom: '10px' }}>
            <Form.Control
              type='text'
              name='username'
              placeholder='กรุณากรอก EA ID'
              className='valoInput'
            />
          </Form.Group>
        </div>
        <p className='form-section__instruction'>* หากต้องการหา EA ID <span><a href='https://youtu.be/ALWKdZUHUIQ?si=M1rCxkSuNZqTVF_5'> กดตามลิ้งค์ตรงนี้ </a></span></p>
      </div>

      <h2 className='form-section__circle' style={{ marginTop: '3%' }} data-aos="fade-up" data-aos-delay="100">
        <span className='form-section__number'>2</span>
        <span className='form-section__name'>เลือกจำนวนที่ต้องการเติม</span>
      </h2>

      <div className='valorantContainer' data-aos="fade-up" data-aos-delay="100">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`image-boxApex ${index === clickedIndex ? 'clicked' : ''}`}
            onClick={() => handleImageClick(index, video.text)}
          >
            <video autoPlay loop muted width="300" height="200">
              <source src={video.src} type="video/mp4" />
            </video>
            <p>{video.text}</p>
          </div>
        ))}
      </div>

      <h2 className='form-section__circle' style={{ marginTop: '3%' }}>
        <span className='form-section__number'>3</span>
        <span className='form-section__name'>ยืนยันคำสั่งซื้อ</span>
      </h2>

      <div className='checkboxValo'>
        <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '2rem' }}>รวมทั้งสิ้น : {totalPrice} บาท</p>
        <Button className="button" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '2%', borderWidth: '0' }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 5 }} /> ยืนยันคำสั่งซื้อ
        </Button>
      </div>
    </div>
  );
}

export default Apex;
