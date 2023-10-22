import React from 'react';
import background from "../images/bg.png";
import './topup.css'
import Promptpay from '../images/Promptpay.png'; // ตรงนี้คือการ import รูปภาพ
import Truemoney from '../images/TrueMoney.png';
const Topup = () => {
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
      <div className='background'>
        <h1 className='font-topup'>TOPUP CREDIT</h1>
        <h2 className='font-topup2'>เติมเงินเข้าบัญชี</h2>
        <div className='boxflex'>
          <div className='box1'>
            <img src={Promptpay} alt="promptpay" className='Promptpay'/>
            <p className='Topup-Name'>
              Promptpay
            </p>
            <p className='Topup-tax'>
                ค่าธรรมเนียม 1 %
            </p>
          </div>
          <div className='box2'>
          <img src={Truemoney} alt="truemoney" className='Truemoney'/>
            <p className='Topup-Name'>
              True Money
            </p>
            <p className='Topup-tax'>
                ค่าธรรมเนียม 20 %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
