import '../styles/navbar.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, scrollSpy, Events } from 'react-scroll';

import { Navdata } from '../utils/Navdata'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = ({ bgcolor }) => {
    const navStyle = {
        color: bgcolor,
    }
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        scrollSpy.update();

        Events.scrollEvent.register('begin', (to, element) => {
            setActiveItem(to);
        });

        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, []);

    console.log(activeItem)
    return (
        <div className="navbar" >

            <Link className='link' to='/home'>

                <ScrollLink
                    to={'home'} 
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
            
                    <div 
                    style={navStyle}
                    className="logo">Lawrence</div>
                </ScrollLink>

            </Link>

            <div className="navigation">
                <ul className='nav-col'>
                    {Navdata.map((item, index) => (
                        <Link
                            onClick={() => setActiveItem(item)}
                            className={`link ${activeItem === item.toLowerCase() ? 'active' : ''}`}
                            to={`/${item.toLowerCase()}`}>

                            <ScrollLink
                                to={item.toLowerCase()} 
                                spy={true}
                                smooth={true}
                                duration={1000} 
                            >
                            
                                <li
                                    className={`row ${activeItem === item.toLowerCase() ? 'active' : ''}`}
                                    style={activeItem === item.toLowerCase() ? navStyle : null}
                                    key={index}>{item}</li>
                            </ScrollLink>

                        </Link>

                    ))}
                </ul>

            </div>
            <div className="social-media">
                <a href="https://github.com/sweetLawrence"><GitHubIcon /></a>
                <a href="https://twitter.com/LTsungu"><TwitterIcon /></a>
            </div>
        </div>
    )
}

export default Navbar