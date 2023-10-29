import React from 'react';
import { useState } from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import videoBg from '../images/Halloween.mp4';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  // const [money,setMoney] = useState(0);
  const [email, setEmail] = useState("");
  const [userList, setUser] = useState([]);

  const history = useHistory();

  // //ดึงข้อมูลผู้ใช้ทั้งหมด
  // const getUser = () => {
  //   axios.get('http://localhost:3001/user_info').then((response)=>{
  //     setUser(response.data);
  //   });
  // }

  const addUsername = () => {
    if (!username || !password || !confirmpassword || !email) {
      // กรอกข้อมูลไม่ครบ ใช้ SweetAlert2 เพื่อแสดงข้อความแจ้งเตือน
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      });
      return;
    }

    if (password.length < 8 || password.length > 20) {
      // ตรวจสอบความยาวของรหัสผ่าน
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร',
      });
      return;
    }

    if (password !== confirmpassword) {
      // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกันหรือไม่
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน',
      });
      return;
    }

    if (!email.includes('@')) {
      // ตรวจสอบว่าอีเมลมี @ หรือไม่
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'อีเมลไม่ถูกต้อง',
      });
      return;
    }
    axios.post('http://localhost:3001/create', {
      username: username,
      password: password,
      confirmpassword: confirmpassword,
      email: email
    }).then((response) => {
      setUser({
        ...userList,
        username: username,
        password: password,
        confirmpassword: confirmpassword,
        email: email
      })
      Swal.fire({
        icon: 'success',
        title: 'สมัครสมาชิกสำเร็จ',
        text: 'ยินดีต้อนรับ! คุณได้สมัครสมาชิกแล้ว'
      });
      history.push('/login');
    })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'สมัครสมาชิกล้มเหลว',
          text: 'กรุณาสมัครสมาชิกอีกรอบ'
        });
      });
  }

  return (
    <div className='registerScreen'>
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className='registerbg' data-aos="fade-up" data-aos-delay="0">
        <h1 className='fontRegister'>สมัครสมาชิก</h1>
        <div className="line-3"></div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
          <Form>
            <Form.Group style={{ marginBottom: '10px' }}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                placeholder='กรุณากรอก username'
                style={{ borderRadius: '15px', borderWidth: '1px' }}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: '10px' }}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='กรุณากรอก password'
                style={{ borderRadius: '15px', borderWidth: '1px' }}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: '10px' }}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                placeholder='กรุณากรอก confirm password'
                style={{ borderRadius: '15px', borderWidth: '1px' }}
                onChange={(event) => {
                  setConfirmpassword(event.target.value)
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: '10px' }}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='กรุณากรอก email'
                style={{ borderRadius: '15px', borderWidth: '1px' }}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
          <Button className="button" type="button" onClick={addUsername} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginRight: '10%', borderWidth: '0' }}>
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
          </Button>

          <Link to="/allitem">
            <Button className="button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '2%', borderWidth: '0' }}>
              <FontAwesomeIcon icon={faBackward} style={{ marginRight: 5 }} /> กลับสู่หน้าหลัก
            </Button>
          </Link>

        </div>

        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Register;
