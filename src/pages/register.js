import React from 'react';
import background from "../images/bg.png";
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faBackward } from '@fortawesome/free-solid-svg-icons'; 


const Register = () => {
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
      <div className='registerbg'>
        <h1 style={{fontSize:'50px',color:'#E63946'}}>สมัครสมาชิก</h1>
        <div class="line-3" ></div>
        <div>ป้อนinput</div>
        <div style={{flexDirection:'row',justifyContent:'space-around'}}>
          <button type="button" style={{backgroundColor:'#06D6A0',borderWidth:'0px',color:'white',borderRadius:'5px',width:'300px',height:'50px',fontSize:'20px'}}><FontAwesomeIcon icon={faUserPlus} style={{marginRight:5}}/>สมัครสมาชิก</button>
          <button type="button" style={{backgroundColor:'#E63946',borderWidth:'0px',color:'white',borderRadius:'5px',width:'300px',height:'50px',fontSize:'20px'}}><FontAwesomeIcon icon={faBackward} style={{marginRight:5}}/>กลับสู่หน้าหลัก</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
