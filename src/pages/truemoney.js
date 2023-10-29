import React, { Fragment } from 'react';
import './truemoney.css'
import Truemoney from '../images/true-money.png';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videoBg from '../images/Halloween.mp4';


import {faSquareCheck } from '@fortawesome/free-solid-svg-icons';
const Truemoneypay = () => {
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
        <h2 className='topup2' data-aos = 'fade-up' data-aos-delay = '50'>บัตรเงินสดทรูมันนี่</h2>
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
              />
              <div className='Wallet'>กรอกจำนวนเงินที่ต้องการเติม</div>
              <Form.Control
                type='text'
                name='เติมเงิน'
                placeholder='กรุณากรอก จำนวนเงิน'
                style={{ borderRadius: '15px', borderWidth: '1px' ,textAlign:'center'}}
              />
              
              <div className='setbutton'>
                <Button className="truebutton" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', height: '50px', fontSize: '20px',  borderWidth: '0' }}>
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