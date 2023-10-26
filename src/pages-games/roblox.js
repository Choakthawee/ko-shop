import React, { useState } from 'react';
import './roblox.css';
import robux from '../roblox-robux/robux.png'
import { Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Roblox = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalRobux, setTotalRobux] = useState(0);
    const [totalRobuxMap,setTotalRobuxMap] = useState(0);

    const handleRobuxChange = (event) => {
        const robuxAmount = parseInt(event.target.value);
        const rate = 10; // Rate 10/THB
        const price = robuxAmount / rate;
        const pricemap = (robuxAmount * (0.4285))+robuxAmount
        setTotalRobuxMap(pricemap.toFixed(0));
        setTotalPrice(price.toFixed(2)); // Round to 2 decimal places
        setTotalRobux(robuxAmount);
    };

    return (
        <div className="robloxScreen">
            <div className='centered-container'>
                <h1 className='font-roblox'>BUY ROBUX R$</h1>
            </div>

            <div className='centered-container'>
                <h1 className='font-subroblox'>ซื้อ R$ ด้วย Configure game</h1>
            </div>

            <div className='show-robuxnow' data-aos="fade-up" data-aos-delay="0">
                <img src={robux} className='image-robux'></img>
                <p className='font-robux'>Rate 10/THB</p>
                <p className='font-robuxnow'>0 R$</p>
                <p className='font-readytosend'>ไม่พร้อมจำหน่าย</p>
            </div>

            <div className='divtext-roblox' data-aos="fade-up" data-aos-delay="50">
                <div className='div-input-roblox1'>
                    <h1 style={{marginBottom:'10px'}}>Roblox Username</h1>
                    <p className='info-textroblox'>กรุณากรอกชื่อผู้ใช้งาน roblox ของคุณ</p>
                    <Form.Group style={{ marginBottom: '10px' }}>
                        <Form.Control
                            className='input-roblox1'
                            type='text'
                            name='username'
                            placeholder='Roblox Username'
                        />
                    </Form.Group>
                    
                    <div className='input-robux'>
                        <div>
                            <span className='robux-text-color input-robux-text1'>
                                R$
                            </span>
                        </div>
                        <Form.Group style={{ marginBottom: '10px' }}>
                            <Form.Control
                                className='input-roblox2'
                                type='number'
                                name='robuxAmount'
                                placeholder='จำนวน robux ที่ต้องการซื้อ'
                                onChange={handleRobuxChange} // Call the function when input changes
                            />
                        </Form.Group>
                        <div className='input-group-append'>
                            <span className='robux-text-color input-robux-text2'>
                                Rate 10/THB
                            </span>
                        </div>
                    </div>
                    <p style={{ marginBottom: '10px', backgroundColor: '#fff0dd', borderRadius: '10px', height: '20%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                        ซื้อ <b className='robux-text-color total-robux-margin' > {totalRobux} R$</b> เป็นจำนวนเงินทั้งสิ้น {totalPrice} THB
                    </p>
                    <Button className="button-roblox" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '100%', height: 'auto', fontSize: '20px', marginBottom: '2%', borderWidth: '0' }}>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 5 }} /> ยืนยันคำสั่งซื้อ
                    </Button>
                </div>

                <div className='div-input-roblox2' data-aos="fade-up" data-aos-delay="150">
                    <h1>ขั้นตอนการซื้อ R$ แบบ Map</h1>
                    <p style={{marginTop:'10px'}}>วิธีและการดำเนินการรูปแบบ Configure game</p>
                    <ol>
                        <li className='mark-text'>
                            กรุณากรอก Roblox Username เพื่อให้ระบบตรวจสอบข้อมูลเกมส์ของท่าน
                        </li>
                        <li className='mark-text'>
                            กรอกจำนวน Robux ที่ต้องการซื้อโดยมีค่าบริการ Rate 10/THB
                        </li>
                        <li className='global-margin'>
                            กรุณากดเข้า <b style={{color:'#e95420'}}>Game Configure</b> เพื่อเข้าไปตั้งค่าที่ Access Settings
                        </li>
                        <li className='global-margin'>
                            กรุณาตั้งค่า Access Type เป็น Public Server
                        </li>
                        <li className='global-margin'>
                            กรุณาตั้งค่า "Requires Robux" และกำหนดราคาเป็น <span className='robux-text-color'>{totalRobuxMap} Robux</span>
                        </li>
                        <li className='global-margin'>
                            Robux จำนวน 100 R$ จะเข้าในระบบบัญชี
                        </li>
                        <li className='global-margin'>
                            ยืนยันการสั่งซื้อ Robux R$
                        </li>
                        <li style={{marginBottom:'10px',color:'red'}}>
                            โดย Robux จะเข้าบัญชีภายใน 5-7 วัน
                        </li>

                        <h1 style={{marginTop:'20px'}}>คำเตือน เพื่อความปลอดภัยของคุณลูกค้า</h1>
                        <ul>
                            <li className='global-margin' style={{marginTop:'10px',marginBottom:'10px'}}>รหัสของคุณต้องมีอายุมากกว่า +1 ปี</li>
                            <li className='global-margin'>ต้องมีการเชื่อมอีเมลล์ และ มีการแต่งตัวที่ไม่ดูเป็นผู้เล่นใหม่</li>
                            <li className='global-margin'>ไม่แนะนำให้ลูกค้าสั่งซื้อ R$ จากระบบนี้ถี่เกินไปเพราะจะทำให้ Roblox ตรวจสอบรหัสของท่านได้</li>
                            <li className='global-margin'>ไม่แนะนำให้ลูกค้านำ R$ ไปเข้ากลุ่มหรือละเมิดกฎเกณฑ์ของ Roblox</li>
                            <li className='global-margin'>ต้องเติม ครั้งละ 350R เพราะทางแพลตฟอร์ม กำหนดไว้ได้แค่ไม่เกิน 500R</li>
                        </ul>
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Roblox;