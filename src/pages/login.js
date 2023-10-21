import React from 'react';
import background from "../images/bg.png";
import './login.css';

const Login = () => {
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
      <div style={{backgroundColor:'white',width:'80%',height:'80%',borderRadius:30,paddingLeft:'40px',paddingTop:'40px'}}>
        <h1 style={{fontSize:'50px',color:'#E63946'}}>เข้าสู่ระบบ</h1>
        <div class="line-3" ></div>
      </div>
    </div>
  );
};

export default Login;
