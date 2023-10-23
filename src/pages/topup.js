import React from 'react';
import background from "../images/bg.png";
import './topup.css'
import Qrcode from '../images/topup-qrcode.png'; // ตรงนี้คือการ import รูปภาพ
import Truemoney from '../images/true-money.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
        <h1 className='font-topup' data-aos = "fade-up" data-aos-delay = "0">TOPUP CREDIT</h1>
        <h2 className='font-topup2' data-aos = "fade-up" data-aos-delay = "50">เติมเงินเข้าบัญชี</h2>
        <div className='boxflex'>
          <Link to="/qrcode" className="box1" data-aos = "fade-up" data-aos-delay = "100" data-aos-once="true">
            <img src={Qrcode } alt="Qrcode " className='Qrcode ' />
            <p className='Topup-Name'>
              QR Code
            </p>
            <p className='Topup-tax'>
              ค่าธรรมเนียม 1 %
            </p>
          </Link>
          <Link to="/truemoney" className="box2" data-aos = "fade-up" data-aos-delay = "150" data-aos-once="true">
            <img src={Truemoney} alt="truemoney" className='Truemoney' />
            <p className='Topup-Name-Truemoney'>
              
            </p>
            <p className='Topup-tax'>
              ค่าธรรมเนียม 0 %
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topup;