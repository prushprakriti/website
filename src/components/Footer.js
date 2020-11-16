import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <>
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <p className="text">© 2020 PURUSHA PRAKRITI ECOSYSTEM PVT. LTD.</p>
          <div className='social-links'>
            <Link style={{margin: '10px'}}to='https://www.facebook.com/Purusha-Prakriti-Ecosystem-110037794229009/'
              target='_blank'>
              <i class="fa fa-facebook fa-lg"></i>
            </Link>
            <Link style={{margin: '10px'}}
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link style={{margin: '10px'}}
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link style={{margin: '10px'}}
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link style={{margin: '10px'}}
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
        </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Footer;