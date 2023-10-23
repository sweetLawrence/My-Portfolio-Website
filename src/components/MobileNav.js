import React, { useState } from 'react'
import { Navdata } from '../utils/Navdata'
import { Link as ScrollLink, Element, scrollSpy, Events } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../styles/mobilenav.css';
import 'animate.css';

const MobileNav = ({ mobileNavVisible, closeMobileNav }) => {
  const navStyle = {
    color: 'red',
  }
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const handleItemClick = () => {
    closeMobileNav();
  };
  return (
    <div className={`mobile-nav animate__animated animate__backInDown`}
      style={{
        display: mobileNavVisible ? "block" : "none",
      }}
    >
      <div className="navigation">
        <ul className={`nav-col ${menuOpen ? "open" : "close"}`}>
          {Navdata.map((item, index) => (
            <Link
              onClick={handleItemClick}
              className={`link ${activeItem === item.toLowerCase() ? 'active' : ''}`}
              to={`/${item.toLowerCase()}`}>

              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={1000}
              >

                <li
                  onClick={handleItemClick}
                  className={`mobile-row ${activeItem === item.toLowerCase() ? 'active' : ''}`}
                  style={activeItem === item.toLowerCase() ? navStyle : null}
                  key={index}>{item}</li>
              </ScrollLink>

            </Link>

          ))}
        </ul>

      </div>
    </div>


  )
}

export default MobileNav