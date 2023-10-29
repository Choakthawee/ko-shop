import React from 'react';
import { Link } from 'react-router-dom';
import './allitem.css';
import valorant from '../images/valorant.png';
import roblox from '../images/roblox.png';
import rov from '../images/rov.png';
import apex from '../images/apex.png';
import videoBg from '../images/Halloween.mp4';

const AllItem = () => {
  return (
    <div className='allitem'>
      <div className='allitemScreen'>
        <video autoPlay loop muted className='video-bg'>
          <source src={videoBg} type='video/mp4' />
        </video>
        <div className='centered-container'>
          <h1 className='font-allitem' data-aos="fade-up">ร้านค้า</h1>
        </div>
        <div className='centered-container'>
          <h1 className='font-suballitem' data-aos="fade-up" data-aos-delay="50">เกมทั้งหมด</h1>
        </div>
        <div className='my-container'>
          <div className='boxallflex2'>
            <Link to="/valorant" className='boxallitem' data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <img src={valorant} alt="valorant" className='valorant' />
            </Link>
            <Link to="/roblox" className='boxallitem' data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
              <img src={roblox} alt="roblox" className='valorant' />
            </Link>
          </div>
          <div className='boxallflex2'>
            <Link to="/rov" className='boxallitem' data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              <img src={rov} alt="rov" className='valorant' />
            </Link>
            <Link to="/apex" className='boxallitem' data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
              <img src={apex} alt="apex" className='valorant' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
