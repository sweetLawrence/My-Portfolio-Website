import '../styles/homepage.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, scrollSpy, Events } from 'react-scroll';
import Button from '../components/Button';
import res from '../Images/reservations.webp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Homepage = ({ color }) => {
    return (
        <div className='home'>
            {/* <div className="bg-image"> */}
            {/* <img src={res} alt="res" /> */}
            {/* </div> */}
            <div className="middleinfo">
                <h1>Welcome</h1>
                <p className='title'>I am Lawrence Tsungu.</p>
                <p className='based'>based in Nairobi,Kenya</p>
                <Button content="Hire me" bgcolor={color} />

            </div>
            <div className="arrow">
                <Link
        
                    to={`/about`}>

                    <ScrollLink
                        to={`about`} // This should match the 'name' of the Element below
                        spy={true}
                        smooth={true}
                        duration={600} // Adjust the duration as needed
                    >
                        {/* Scroll to {item} */}
                        {/* <li className='row' key={index}>{item}</li> */}
                        <KeyboardArrowDownIcon style={{color:color}}/>
                    </ScrollLink>

                </Link>
                
            </div>


        </div>
    )
}

export default Homepage