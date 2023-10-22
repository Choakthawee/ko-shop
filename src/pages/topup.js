import React from 'react';
import background from "../images/bg.png";
import './topup.css'

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
        <h1 className='font-topup'>เลือกช่องทางการเติมเงิน</h1>
        <div className='boxflex'>
          <div className='box1'>
          <div className='box1'>
              <img src="../images/icon-thaiqr.png" alt="promptpay" />
          </div>

          </div>
          <div className='box2'>
            true
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
