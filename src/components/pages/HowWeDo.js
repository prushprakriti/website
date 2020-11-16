import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import Footer from '../Footer';

export default function HowWeDo() {
  return (
        <>
        <Navbar />
            <div className='HowWeDo'> 
            <h2 className='HowWeDoh2'>making water <br/> ALIVE </h2>
            <SideMenu />
                <div className='HowWeDoText'>
                <p>With the help of our technology partners we can rejuvenate any Water Body whose bed is that is not laminated/cemented at the bottom, be it Rivers, Drains, Lakes or Ponds. As long as there is Water in any condition or with any kind of pollutants it can be restored to the natural ecological system.</p>
                <br/>
                <p>Based on the survey and report the treatment of water body is planned with herbal solutions that reactivate the oxygen generation in water body.  There is no use of additional machinery, chemicals or biological species. The sludge gets consumed in situ, foul smell becomes zero and weeds die their natural death. 
                    <br/>
                    Once treatment commenced no mosquito breeding or algal blooms are observed.
                </p>
                <br/>
                <p>The non bio degradable substances that remain on the water surface are to be physically removed and all bio degradable substances become food in the revived water ecology.</p>
                <br/>
                <p>
                No Construction or Installation of any kind required to maintain the pond other than the regular herbal dosage. 
                </p>
              
                </div>
                
        </div>
        <Footer />
        </>

  );
}