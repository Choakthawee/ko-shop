import React from 'react';
import './qrcode.css'
import { Form, Button } from 'react-bootstrap';
import Qrcode from '../images/topup-qrcode.png'; // ตรงนี้คือการ import รูปภาพ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import THcode from '../images/thai_qr_payment.png';
import QrcodePromptpay from '../images/Qrcodepromtpay.png'
import { faSquareCheck, faQrcode } from '@fortawesome/free-solid-svg-icons';
import videoBg from '../images/Halloween.mp4';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Qrcodepay = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className='backgroundqr'>
        <h1 className='qrtopup' data-aos = 'fade-up' data-aos-delay = '0' >QR-CODE</h1>
        <h2 className='qrtopup2'data-aos = 'fade-up' data-aos-delay = '50' >เติมเงินผ่านคิวอาร์โค๊ด</h2>
        <div className='boxqr'>
          <div className='box-qrcode'>
            <Form>
              <Form.Group>
                <div className='Formgroup' data-aos = 'fade-up' data-aos-delay = '100'>
                  <p className='QrText'>กรอกจำนวนเงินที่ต้องการ</p>
                  <Form.Control
                    className='boxmoney'
                    type='text'
                    name='เติมเงิน'
                    placeholder='จำนวนเงิน'
                    style={{ borderRadius: '15px', borderWidth: '1px', textAlign: 'center',justifyContent:'center'}}
                  />
                  <p className='QrText1'>มีค่าธรรมเนียม 1% ต่อรายการ</p>

                  <div>
                    <Button className="paybutton" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px',minWidth:"300px", height: '50px', fontSize: '20px',borderWidth: '0' }}>
                      <FontAwesomeIcon icon={faQrcode} /> สร้างคิวอาร์โค๊ด
                    </Button>
                  </div>
                </div>
              </Form.Group>
            </Form>

          </div>
          <div className='boxpic' data-aos = 'fade-up' data-aos-delay = '150'>
            <img src={THcode} alt="THcode " className='THcode ' />
            <div className='Qrscan'>
              <img src={QrcodePromptpay} alt="QrcodePromptpay " className='QrcodePromptpay ' />
            </div>
            <div className=''>
              <Button className="paybutton" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '280px', height: '50px', fontSize: '20px', borderWidth: '0'}}>
                <FontAwesomeIcon icon={faSquareCheck} /> ยืนยันการเติมเงิน
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Qrcodepay;