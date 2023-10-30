import videoBg from '../images/Halloween.mp4';
import React, { useState } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut,faEdit,faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [username, setUsername] = useState('Karnaeng123');
    const [money,setMoney] = useState(0);
    const [email,setEmail] = useState('choakthawee.n@ku.th');

    return (
        <div className='Profile-Screen'>
            <video autoPlay loop muted className='video-bg'>
                <source src={videoBg} type='video/mp4' />
            </video>
            <div className='loginbg' data-aos="fade-up" data-aos-delay="0">
                <h1 className='fontLogin'>หน้าโปรไฟล์</h1>
                <div className="line-3"></div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{marginBottom:'10px'}}>ยินดีต้อนรับคุณ, {username}</h2>
                    <div style={{justifyContent:'flex-starts',marginBottom:'10px'}}>
                        <h3 style={{margin:'10px',}}>ชื่อผู้ใช้งาน <span style={{marginLeft:'7rem',color:'green'}}>{username}</span></h3>
                        <h3 style={{margin:'10px'}}>ยอดเงินคงเหลือ <span style={{marginLeft:'4rem',color:'green'}}>{money} บาท</span><Link to="/topup"><FontAwesomeIcon icon={faPlusCircle} style={{ marginLeft: '5px',color:'green' }} /></Link></h3>
                        <h3 style={{margin:'10px'}}>อีเมล์ <span style={{marginLeft:'10rem',color:'green'}}>{email}</span></h3>
                    </div>
                    
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Form>
                            
                            <Form.Group style={{marginBottom:'10px'}}>
                                <Form.Label>Old Password</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='username'
                                    placeholder='กรุณากรอกรหัสผ่านเก่า'
                                    style={{borderRadius:'15px',borderWidth:'1px'}}
                                />
                            </Form.Group>

                            <Form.Group style={{marginBottom:'10px'}}>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    placeholder='กรุณากรอกรหัสผ่านเก่าใหม่'
                                    style={{borderRadius:'15px',borderWidth:'1px'}}
                                />
                            </Form.Group>

                            <Form.Group style={{marginBottom:'10px'}}>
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    placeholder='กรุณากรอกรหัสผ่านเก่าใหม่อีกครั้ง'
                                    style={{borderRadius:'15px',borderWidth:'1px'}}
                                />
                            </Form.Group>

                        </Form>
                    </div>

                    <Button className="button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '4%', borderWidth: '0' }}>
                            <FontAwesomeIcon icon={faEdit} style={{ marginRight: 5 }} /> เปลี่ยนรหัสผ่าน
                    </Button>
                    <Link to="/allitem">
                        <Button className="button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '4%', borderWidth: '0',alignSelf:'flex-end'}}>
                            <FontAwesomeIcon icon={faSignOut} style={{ marginRight: 5 }} /> ล๊อคเอ้าท์
                        </Button>
                    </Link>
                </div>

                <div className="line-3"></div>
            </div>
        </div>
    )
}

export default Profile;
