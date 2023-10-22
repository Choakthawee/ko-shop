import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser ,faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <div className='loginScreen'>
      <div className='registerbg'>
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
          </Form>
        </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
            <Button className= "button" type="button" style={{ backgroundColor: '#06D6A0', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginRight: '10%', borderWidth: '0' }}>
              <FontAwesomeIcon icon={faDoorOpen} style={{ marginRight: 5 }} /> เข้าสู่ระบบ
            </Button>
            <Button className= "button" type="button" style={{ backgroundColor: '#E63946', color: 'white', borderRadius: '10px', width: '300px', height: '50px', fontSize: '20px', marginBottom: '4%', borderWidth: '0' }}>
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
            </Button>
          </div>

        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Register;
