import videoBg from '../images/Halloween.mp4';
import React, { useState, useEffect } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
const Profile = () => {
    const username = localStorage.getItem('username');
    const [user, setUser] = useState({});
    const history = useHistory();
    const navigateToProfile = () => {
        setTimeout(() => {
            history.push('/login');
        }, 1000); // หน่วงเวลา 1 วินาที (1000 มิลลิวินาที)
    };
    const handleLogout = () => {
        Swal.fire({
            title: 'คุณแน่ใจหรือไม่ที่ต้องการออกจากระบบ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, ออกจากระบบ'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                navigateToProfile();
            }
        })
    };

    //ดึงข้อมูลผู้ใช้ทั้งหมด
    useEffect(() => {
        axios.get(`http://localhost:3001/user_info?username=${username}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch((error) => {
                console.error('มีข้อผิดพลาดในการดึงข้อมูล:', error);
            });
    }, [username, setUser]);
    return (
        <div className='Profile-Screen'>
            <video autoPlay loop muted className='video-bg'>
                <source src={videoBg} type='video/mp4' />
            </video>
            <div className='loginbg' data-aos="fade-up" data-aos-delay="0">
                <h1 className='fontLogin'>หน้าโปรไฟล์</h1>
                <div className="line-3"></div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ marginBottom: '10px' }}>ยินดีต้อนรับคุณ, {username}</h2>
                    <div style={{ justifyContent: 'flex-starts', marginBottom: '10px' }}>
                        <h3 style={{ margin: '10px', }}>ชื่อผู้ใช้งาน <span style={{ marginLeft: '7rem', color: 'green' }}>{username}</span></h3>
                        <h3 style={{ margin: '10px' }}>ยอดเงินคงเหลือ <span style={{ marginLeft: '4rem', color: 'green' }}>{user.money} บาท</span><Link to="/topup"><FontAwesomeIcon icon={faPlusCircle} style={{ marginLeft: '5px', color: 'green' }} /></Link></h3>
                        <h3 style={{ margin: '10px' }}>อีเมล์ <span style={{ marginLeft: '10rem', color: 'green' }}>{user.email}</span></h3>
                    </div>
                    <Button className="button" type="button" onClick={handleLogout} style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '4%', borderWidth: '0', alignSelf: 'flex-end' }}>
                        <FontAwesomeIcon icon={faSignOut} style={{ marginRight: 5 }} /> ล๊อคเอ้าท์
                    </Button>
                </div>

                <div className="line-3"></div>
            </div>
        </div>
    )
}

export default Profile;
