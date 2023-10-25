import '../styles/homepage.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, scrollSpy, Events } from 'react-scroll';
import Button from '../components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MobileNav from '../components/MobileNav';

const Homepage = ({ color }) => {
    return (
        <div className='home'>
            <div className="middleinfo">
                <h1>Welcome</h1>
                
                <p className='title'>I am Lawrence Tsungu.</p>
                <p className='based'>based in Nairobi,Kenya</p>
                <a href="mailto:tsungulawrence@gmail.com?subject=Requesting Your Services%20Here"><Button content="Hire me" bgcolor={color} /></a>

            </div>
            <div className="arrow">
                <Link to={`/about`}>
                    <ScrollLink
                        to={`about`}
                        spy={true}
                        smooth={true}
                        duration={600}
                    >

                        <KeyboardArrowDownIcon style={{ color: color }} />
                    </ScrollLink>

                </Link>

            </div>

        </div>
    )
}

export default Homepage