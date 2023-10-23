import React from 'react';
import './allitem.css'
import valorant from '../images/valorant.png'
import roblox from '../images/roblox.png'
import rov from '../images/rov.png'
import apex from '../images/apex.png'

const AllItem = () => {
  return (
    <section className='allitem'>
      <div className='allitemScreen'>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 className='font-allitem'>ร้านค้า</h1>
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 className='font-suballitem'>เกมทั้งหมด</h1>
        </div>
        
        <div className='my-container'> 
          <div className='boxallflex1'>
            <div className='boxallitem'>
              <img src={valorant } alt="valorant " className='valorant' />
              <p style={{paddingLeft:'1rem',paddingTop:'0.3rem',fontWeight:'bold',backgroundColor:'#ff6900',width:'100%',height:'100%',color:'white',fontSize:'24px'}}>บริการเติมเกม Valorant</p>
            </div>

            <div className='boxallitem'>
              <img src={roblox } alt="roblox " className='valorant' />
              <p style={{paddingLeft:'1rem',paddingTop:'0.3rem',fontWeight:'bold',backgroundColor:'#ff6900',width:'100%',height:'100%',color:'white',fontSize:'24px'}}>บริการเติมเกม Roblox</p>
            </div>
          </div>

          <div className='boxallflex1'>
            <div className='boxallitem'>
              <img src={rov } alt="rov " className='valorant' />
              <p style={{paddingLeft:'1rem',paddingTop:'0.3rem',fontWeight:'bold',backgroundColor:'#ff6900',width:'100%',height:'100%',color:'white',fontSize:'24px'}}>บริการเติมเกม ROV</p>
            </div>

            <div className='boxallitem'>
              <img src={apex } alt="apex " className='valorant' />
              <p style={{paddingLeft:'1rem',paddingTop:'0.3rem',fontWeight:'bold',backgroundColor:'#ff6900',width:'100%',height:'100%',color:'white',fontSize:'24px'}}>บริการเติมเกม Apex Legend (PC)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllItem;
