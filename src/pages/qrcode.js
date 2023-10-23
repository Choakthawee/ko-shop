import React from 'react';
import background from "../images/bg.png";
import './qrcode.css'
import Qrcode from '../images/topup-qrcode.png'; // ตรงนี้คือการ import รูปภาพ
const Qrcodepay = () => {
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
      <div className='backgroundqr'>
        <h1 className='qrtopup'>QR-CODE</h1>
        <h2 className='qrtopup2'>เติมเงินผ่านคิวอาร์โค๊ด</h2>
        <div className='boxqr'>
          <div className='box-qrcode'>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Qrcodepay;