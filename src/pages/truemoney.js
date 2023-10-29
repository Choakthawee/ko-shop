import React from 'react';
import './truemoney.css'
import Truemoney from '../images/true-money.png';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videoBg from '../images/Halloween.mp4';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
import {faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Truemoneypay = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleTopup = () => {
    const loggedInUsername = localStorage.getItem('username'); // Get username from Local Storage

    if (loggedInUsername) {
      if (phoneNumber.startsWith('0') && phoneNumber.length === 10) {
        axios
          .post('http://localhost:3001/topup', {
            username: loggedInUsername,
            phoneNumber: phoneNumber,
            amount: amount,
          })
          .then((response) => {
            Swal.fire({
              icon: 'success',
              title: 'เติมเงินสำเร็จ',
              text: 'บัตรเงินสดทรูมันนี่',
            });
            // Update the user interface after successful top-up (e.g., display new balance)
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
          title: 'เบอร์โทรศัพท์ไม่ถูกต้อง',
          text: 'โปรดใส่หมายเลขโทรศัพท์ที่ขึ้นต้นด้วย "0" และมีความยาว 10 หลัก',
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
      <div className='backgroundpay'>
        <h1 className='topup' data-aos = 'fade-up' data-aos-delay = '0'>TRUEMONEY</h1>
        <h2 className='topup2' data-aos = 'fade-up' data-aos-delay = '50'>เงินสดทรูมันนี่</h2>
        <div className='boxtext' data-aos = 'fade-up' data-aos-delay = '100'>
          <img src={Truemoney} alt="truemoney" className='TruemoenyImg' />
          <Form>
            <Form.Group>
              <p className='Wallet'> กรอกเบอร์มือถือ</p>
              <Form.Control
                type='text'
                name='เติมเงิน'
                placeholder='กรุณากรอก เบอร์มือถือ'
                style={{ borderRadius: '15px', borderWidth: '1px' ,textAlign:'center'}}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <div className='Wallet'>กรอกจำนวนเงินที่ต้องการเติม</div>
              <Form.Control
                type='text'
                name='เติมเงิน'
                placeholder='กรุณากรอก จำนวนเงิน'
                style={{ borderRadius: '15px', borderWidth: '1px' ,textAlign:'center'}}
                onChange={(e) => setAmount(e.target.value)}
              />
              
              <div className='setbutton'>
                <Button className="truebutton" type="button" onClick={handleTopup} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', height: '50px', fontSize: '20px',  borderWidth: '0' }}>
                  <FontAwesomeIcon icon={faSquareCheck} /> ยืนยันการเติมเงิน
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default Truemoneypay;