import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus ,faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { Link ,useHistory } from 'react-router-dom';
import videoBg from '../images/Halloween.mp4';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dataList, setdataList] = useState("");
  const history = useHistory();
  
  const login = () => {
    axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.status === 200) {
        setdataList({
          ...dataList,
          username:username,
          password:password
        })
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับ! คุณได้เข้าสู่ระบบแล้ว'
        });
        history.push('/allitem'); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบล้มเหลว',
          text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
        });
      }
      
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'เข้าสู่ระบบล้มเหลว',
        text: 'Something went wrong. Please try again later.'
      });
    });
  };
  

  return (
    <div className='loginScreen'>
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className='loginbg' data-aos = "fade-up" data-aos-delay = "0">
        <h1 className='fontLogin'>เข้าสู่ระบบ</h1>
        <div className="line-3"></div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
          <Form>
            
            <Form.Group style={{marginBottom:'10px'}}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                placeholder='กรุณากรอก username'
                style={{borderRadius:'15px',borderWidth:'1px'}}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
               
              />
            </Form.Group>

            <Form.Group style={{marginBottom:'10px'}}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='กรุณากรอก password'
                style={{borderRadius:'15px',borderWidth:'1px'}}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
            <Button className= "button" type="button" onClick={login} style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginRight: '10%', borderWidth: '0' }}>
              <FontAwesomeIcon icon={faDoorOpen} style={{ marginRight: 5 }} /> เข้าสู่ระบบ
            </Button>

            <Link to="/register">
              <Button className= "button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '4%', borderWidth: '0' }}>
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
              </Button>
            </Link>
            
          </div>

        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Login;
