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
        <h1>เลือกช่องทางการเติมเงิน</h1>

      </div>
    </div>
  );
};

export default Topup;
