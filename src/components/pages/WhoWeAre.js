import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function WhoWeAre() {
  return (
    <>
    <div className='WhoWeAre'> 
    <Navbar />
    <h2 className='WhoWeAreh2'>Who We Are</h2>
        <div className='WhoWeAreText'>
            PPE is an ecological Start up built on combined experiences of collective companies, Scientists, Technologists, Agriculturist, Grassroots implementing agencies & Management Entrepreneurs who have come together to seek and implement solutions that address key challenges of climate change. Clearly the present solutions offered are not addressing the issues of Air, Water and Earth (Soil) pollution. The need therefore is to put together a diverse team that brings cross sector experiences to find sustainable solutions towards ecological balancing. 
        </div>
        <div className="footer">
          <Footer />
        </div>
  </div>

  
  </>
  );
}