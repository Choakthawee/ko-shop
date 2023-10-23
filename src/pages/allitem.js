import React from 'react';
import { Link } from 'react-router-dom';
import './allitem.css';
import valorant from '../images/valorant.png';
import roblox from '../images/roblox.png';
import rov from '../images/rov.png';
import apex from '../images/apex.png';

const AllItem = () => {
  return (
    <section className='allitem'>
      <div className='allitemScreen'>
        <div className='centered-container'>
          <h1 className='font-allitem'>ร้านค้า</h1>
        </div>

        <div className='centered-container'>
          <h1 className='font-suballitem'>เกมทั้งหมด</h1>
        </div>

        <div className='my-container'>
          <div className='boxallflex2'>

            <Link to="/valorant" className='boxallitem'>
              <img src={valorant} alt="valorant" className='valorant' />
            </Link>

            <Link to="/roblox" className='boxallitem'>
              <img src={roblox} alt="roblox" className='valorant' />
            </Link>
            
          </div>

          <div className='boxallflex2'>

            <Link to="/rov" className='boxallitem'>
              <img src={rov} alt="rov" className='valorant' />
            </Link>

            <Link to="/apex" className='boxallitem'>
              <img src={apex} alt="apex" className='valorant' />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AllItem;