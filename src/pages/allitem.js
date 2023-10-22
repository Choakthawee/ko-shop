import React from 'react';
import background from "../images/bg.png";

const AllItem = () => {
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
      <h1>หมวดหมู่สินค้าทั้งหมด</h1>
    </div>
  );
};

export default AllItem;
