import React, { Fragment } from 'react';
import background from "../images/bg.png";
import './truemoney.css'
import Truemoney from '../images/true-money.png';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserPlus, faBackward,faSquareCheck } from '@fortawesome/free-solid-svg-icons';
const Truemoneypay = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='backgroundpay'>
        <h1 className='topup'>TRUEMONEY</h1>
        <h2 className='topup2'>บัตรเงินสดทรูมันนี่</h2>
        <div className='boxtext'>
          <img src={Truemoney} alt="truemoney" className='TruemoenyImg' />
          <Form>
            <Form.Group>
              <p className='Wallet'>ลิ้งรับซองของขวัญจาก TrueMoney Wallet</p>
              <Form.Control
                type='text'
                name='เติมเงิน'
                placeholder='กรุณากรอก URL'
                style={{ borderRadius: '15px', borderWidth: '1px' ,textAlign:'center'}}
              />
              <div className='Walletbox'>
                <div className='fonttext'>กรุณากรอกลิ้งซองของขวัญ</div>
              </div>
              <div >
                <Button className="truebutton" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '500px', height: '50px', fontSize: '20px', marginRight: '10%', borderWidth: '0' }}>
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