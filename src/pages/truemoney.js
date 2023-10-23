import React from 'react';
import background from "../images/bg.png";
import './truemoney.css'
import Truemoney from '../images/true-money.png';
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
          <img src={Truemoney} alt="truemoney" className='TruemoenyImg'/>
          <div className='box-topup'>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Truemoneypay;