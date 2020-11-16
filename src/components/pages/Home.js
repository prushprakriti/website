import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../HeroSection.css';

function Home() {
  return (
   <>
    <div className='hero-container'>
    <Navbar />
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
     <div className="middle-section">
      <p>“WATER IS THE LIFEBLOOD OF OUR BODIES,<br/> OUR ECONOMY, OUR NATION & OUR WELL-BEING”</p>
      </div>
     <div>
      <p style={{fontSize: "15px"}} className="author-name"> – Stephen Johnson</p>
      </div>
      
      {/* <br/>
      <br/>
      <br/>
      <br/> */}
      <Footer />
    </div>
    </>
  );
}

export default Home;