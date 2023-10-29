import React from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import videoBg from '../images/Halloween.mp4';


const Register = () => {
  return (
    <div className='registerScreen'>
      <video autoPlay loop muted className='video-bg'>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className='registerbg' data-aos = "fade-up" data-aos-delay = "0">
        <h1 className='fontRegister'>สมัครสมาชิก</h1>
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
              />
            </Form.Group>

            <Form.Group style={{marginBottom:'10px'}}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='กรุณากรอก password'
                style={{borderRadius:'15px',borderWidth:'1px'}}
              />
            </Form.Group>

            <Form.Group style={{marginBottom:'10px'}}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                placeholder='กรุณากรอก confirm password'
                style={{borderRadius:'15px',borderWidth:'1px'}}
              />
            </Form.Group>

            <Form.Group style={{marginBottom:'10px'}}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='กรุณากรอก email'
                style={{borderRadius:'15px',borderWidth:'1px'}}
              />
            </Form.Group>
          </Form>
        </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
            <Button className= "button" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginRight: '10%', borderWidth: '0' }}>
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
            </Button>

            <Link to="/allitem">
              <Button className= "button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '2%', borderWidth: '0' }}>
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
