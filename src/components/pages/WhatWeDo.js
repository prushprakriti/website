import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import Footer from '../Footer';

export default function WhatWeDo() {
    return (
        <>
        <div className='WhatWeDo'> 
        <Navbar />
        
        <h2 className='WhatWeDoh2'>Water bodies revivals <br/> ECOLOGICAL WATER REJUVENATION </h2>
        <SideMenu />
            <div className='WhatWeDoText'>
            <p>Revisiting ancient wisdom and Vedic sciences that links Cow as the fulcrum of ecological balance, PPE team is integrating rejuvenation with economics to ensure sustenance and conservation. Through our work on on ecological restoration of water air and soil, we strive towards making human life sustainable on this blue planet. </p>
            <br/>
            <p>Life as we all believe will continue to exist only when the key elements of life are nurtured, preserved and replenished.</p>
            <br/>
            <p>The Vedic sciences that are the largest repository of knowledge hold the keys to balance the elements of life - soil, water, air, fire & cosmic energy. </p>
            <br/>
            <p>PPE through its works, collaborations and implementation is working on water rejuvenation to recharge this element that has a cascading effect on the entire ecosystem on earth. </p>
            <div style={{color: "red", marginLeft:"-250px"}}>
            <Footer />
            </div>
            </div>
              
      </div>
      
      </>
      );
}