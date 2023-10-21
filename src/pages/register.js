import React from 'react';
import background from "../images/bg.png";

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
      <h1>สมัครสมาชิก</h1>
    </div>
  );
};

export default Register;
