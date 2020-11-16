import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './SideMenu.css';

function SideMenu() {
    return (
        <>
            <div className="sidemenu">
              <ul className="sidemenuul">
                <li className="sidemenuli">
                  <Link to='/WhatWeDo'>
                  INTRODUCTION
                  </Link>
                </li>
                <li className="sidemenuli">
                  <Link to='/HowWeDo'>
                  HOW WE DO
                  </Link>
                </li>
                <li className="sidemenuli">
                  <Link to='/WhatWeDo'>
                  CURRENT PROJECTS
                  </Link>
                </li>
                <li className="sidemenuli">
                  <Link to='/products'>
                  MEDIA
                  </Link>
                </li>
              </ul>
            </div>
        </>
      );
    }
    
    export default SideMenu;