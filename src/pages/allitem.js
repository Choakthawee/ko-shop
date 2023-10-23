import React from 'react';
import './allitem.css'
import valorant from '../images/valorant.jpg'
import roblox from '../images/roblox.jpg'
import rov from '../images/rov.jpg'
import apex from '../images/apex.jpg'

const AllItem = () => {
  return (
    <section className='allitem'>
      <div className='allitemScreen'>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 className='font-allitem'>ร้านค้า</h1>
        </div>
        
        <div className='my-container'> 
          <div className='boxallflex1'>
            <div className='boxallitem'>
              <img src={valorant } alt="valorant " className='valorant' />
              <p>valorant</p>
            </div>

            <div className='boxallitem'>
              <img src={roblox } alt="roblox " className='valorant' />
              <p>roblox</p>
            </div>
          </div>

          <div className='boxallflex1'>
            <div className='boxallitem'>
              <img src={rov } alt="rov " className='valorant' />
              <p>rov</p>
            </div>

            <div className='boxallitem'>
              <img src={apex } alt="apex " className='valorant' />
              <p>apex</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllItem;
