import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './roblox.css';
import robux from '../roblox-robux/robux.png'

const Roblox = () => {
    useEffect(() => {
        AOS.init({
            duration : 500,
        }); // เรียกใช้ AOS
    }, []);

    return (
        <div className="robloxScreen">
            <div className='centered-container'>
                <h1 className='font-roblox'>BUY ROBUX R$</h1>
            </div>

            <div className='centered-container'>
                <h1 className='font-subroblox'>ซื้อ R$ ด้วย Configure game</h1>
            </div>

            <div className='show-robuxnow' data-aos="fade-up">
                <img src={robux} className='image-robux'></img>
                <p className='font-robux'>Rate 10/THB</p>
                <p className='font-robuxnow'>0 R$</p>
                <p className='font-readytosend'>ไม่พร้อมจำหน่าย</p>
            </div>
        </div>
    )
}

export default Roblox;