import React, { useState } from 'react';
import './valorant.css';
import { Form } from 'react-bootstrap';
import vp540 from '../valorant-points/540.png';
import vp1130 from '../valorant-points/1130.png';
import vp1945 from '../valorant-points/1945.png';
import vp3930 from '../valorant-points/3930.png';
import vp5550 from '../valorant-points/5550.png';
import vp11500 from '../valorant-points/11500.png';

const Valorant = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleImageClick = (index) => {
    if (index === clickedIndex) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  const images = [
    { src: vp540, text: '540 VP' },
    { src: vp1130, text: '1130 VP' },
    { src: vp1945, text: '1945 VP' },
    { src: vp3930, text: '3930 VP' },
    { src: vp5550, text: '5550 VP' },
    { src: vp11500, text: '11500 VP' },
  ];

  return (
    <div className="valorantScreen">
      <h2 className='form-section__circle'>
        <span className='form-section__number'>1</span>
        <span className='form-section__name'>กรุณากรอก RiotID</span>
      </h2>
      <div className='valorantContainer' style={{ flexDirection: 'column' }}>
        <div style={{ marginLeft: '2rem', marginTop: '10px' }}>
          <Form.Group style={{ marginBottom: '10px' }}>
            <Form.Control
              type='text'
              name='username'
              placeholder='กรุณากรอก Riot ID'
              style={{
                width: '30%',
                paddingLeft: '10px',
                marginTop: '1%',
                borderRadius: '15px',
                borderWidth: '1px',
                height: '50px',
              }}
            />
          </Form.Group>
        </div>
        <p className='form-section__instruction'>* หากต้องการหา Riot ID กรุณาเข้าไปที่หน้าโปรไฟล์ของคุณและก็อปปี้ Riot ID + Tag ด้วยปุ่มข้าง Riot ID ของคุณ (ตัวอย่าง: Westbourne#SEA)</p>
      </div>

      <h2 className='form-section__circle' style={{ marginTop: '4%' }}>
        <span className='form-section__number'>2</span>
        <span className='form-section__name'>เลือกจำนวนที่ต้องการเติม</span>
      </h2>

      <div className='valorantContainer'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-box ${index === clickedIndex ? 'clicked' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={image.text} />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Valorant;
