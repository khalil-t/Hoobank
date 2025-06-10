import React from 'react'
import './Navbar.css'
import { navLinks } from '../constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';

import {close, logo, menu} from "../asset"
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [button, setButton] = useState(true);

const handleClick=(nav)=>{
  setActive(nav.title);
    setButton(true); 
const section = document.getElementById(nav.id)
console.log(section)
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}


  return (
    <>
    <div className='nav'>
        <img src={logo} alt="hoobank" />

        <div className='links'>
          <ul className='link'>
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={active === nav.title ? 'whitelink' : 'link1'}
                onClick={() => handleClick(nav)}
              >
                <span className='link2'>{nav.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='onesmall'>
        <div className='ll'>
          <img src={logo} alt="hoobank" />
        </div>

        <div className='hh' onClick={() => setButton(!button)}>
          {button ? (
            <FontAwesomeIcon icon={faBars} className='i' />
          ) : (
            <FontAwesomeIcon icon={faXmark} className='i' />
          )}
        </div>
      </div>

      <div className={`sidebare ${!button ? 'visible' : ''}`}>
        <div className='links'>
          <ul className='link'>
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="link1"
                onClick={() => handleClick(nav)}
              >
                <span className='link2'>{nav.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
                    </>
  )
}

export default Navbar