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
import { Link, useHistory } from 'react-router-dom';

const Qrcodepay = () => {
  const [amount, setAmount] = useState('');
  const [Ck, setCk] = useState(false);
  const history = useHistory();

  const check0 = () => {
    console.log(amount )
    if(localStorage.getItem('username') == null) {
      Swal.fire({
        icon: 'error',
        title: 'ยังไม่ได้ Login',
        text: 'กรุณาล็อคอิน',
      });
    }
    else if (amount.trim() !== '' && !amount.startsWith('0') && amount !== null) {
      setCk(true); Swal.fire({
        icon: 'success',
        title: 'สร้างqrcodeแล้ว',
        text: 'สร้างqrcodeเสร็จแล้ว',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ค่าเงินไม่ถูกต้อง',
        text: 'โปรดใส่ค่าเงินให้ถูกต้อง',
      });

    }
  }
  const handleTopup = () => {
    const loggedInUsername = localStorage.getItem('username'); // Get username from Local Storage
    
      if (loggedInUsername) {
        if (Ck) {
        axios
          .post('http://localhost:3001/topupqrcode', {
            username: loggedInUsername,
            amount: amount,
          })
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'เติมเงินสำเร็จ',
              text: 'qrcode',
            });
            history.push('/allitem');
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'มีข้อผิดพลาด',
              text: 'เกิดข้อผิดพลาดในการเติมเงิน โปรดลองอีกครั้ง',
            });
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'ยังไม่ได้สร้างqrcode',
            text: 'กรุณาสร้างqrcode',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'ยังไม่ได้ Login',
          text: 'กรุณาล็อคอิน',
        });
      }
    

  };

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
        <h1 className='qrtopup' data-aos='fade-up' data-aos-delay='0' >QR-CODE</h1>
        <h2 className='qrtopup2' data-aos='fade-up' data-aos-delay='50' >เติมเงินผ่านคิวอาร์โค๊ด</h2>
        <div className='boxqr'>
          <div className='box-qrcode'>
            <Form>
              <Form.Group>
                <div className='Formgroup' data-aos='fade-up' data-aos-delay='100'>
                  <p className='QrText'>กรอกจำนวนเงินที่ต้องการ</p>
                  <Form.Control
                    className='boxmoney'
                    type='text'
                    name='เติมเงิน'
                    placeholder='จำนวนเงิน'
                    style={{ borderRadius: '15px', borderWidth: '1px', textAlign: 'center', justifyContent: 'center' }}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <p className='QrText1'>มีค่าธรรมเนียม 1% ต่อรายการ</p>

                  <div>
                    <Button className="paybutton" type="button" onClick={() => {check0()}} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', minWidth: "300px", height: '50px', fontSize: '20px', borderWidth: '0' }}>
                      <FontAwesomeIcon icon={faQrcode} /> สร้างคิวอาร์โค๊ด
                    </Button>
                  </div>
                </div>
              </Form.Group>
            </Form>

          </div>
          <div className='boxpic' data-aos='fade-up' data-aos-delay='150'>
            <img src={THcode} alt="THcode " className='THcode ' />
            <div className='Qrscan'>
              <img src={QrcodePromptpay} alt="QrcodePromptpay " className='QrcodePromptpay ' />
            </div>
            <div className=''>
              <Button className="paybutton" type="button" onClick={handleTopup} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '280px', height: '50px', fontSize: '20px', borderWidth: '0' }}>
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