import React from 'react'
import '../styles/portfolio.css';
import Utilitybox from '../components/Utilitybox';
import Project from '../components/Project';
import fitnessTracker from '../Images/fitnesstracker.jpg'
import kenyenya from '../Images/kenyenya.jpg'
import orogare from '../Images/orogare.jpg'
import tcrypt from '../Images/tcrypt.jpg'
import tsphere from '../Images/tsphere.jpg'
import kmis from '../Images/kmis2.jpg'
import tuinue from '../Images/tuniue.jpg'

const Portfolio = ({ color }) => {
    const underlineStyle = {
        backgroundColor: color,
      }
    return (
        <div className='main-container'>
            <div className='portfolio'>
                <div className="top">
                    <h1>Portfolio</h1>
                    <div
                        style={underlineStyle}
                        className="underline"></div>
                </div>
                <div className="bottom-part">
                  <Project title="Kenyenya TTC" url="" color={color} imageSrc={kenyenya}/>
                  <Project title="Orogare TVC" url="https://www.orogaretechnical.ac.ke/" giturl="" color={color} imageSrc={orogare}/>
                  <Project title="Fitness Tracker" url="https://fitness-tracker-ruby.vercel.app" giturl="https://github.com/sweetLawrence/fitness-tracker" color={color} imageSrc={fitnessTracker}/>
                  <Project title="T-Crypt" url="https://t-crypt.vercel.app" giturl="https://github.com/sweetLawrence/T_Crypt" color={color} imageSrc={tcrypt}/>
                  <Project title="Ticket Sphere" url="https://www.ticketsphere.co.ke" giturl="" color={color} imageSrc={tsphere}/>
                  {/* <Project title="K-MIS" url="" giturl="" color={color} imageSrc={kmis}/> */}
                  <Project title="Tuninue Kids Africa" url="https://tuinue-kids.vercel.app" giturl="" color={color} imageSrc={tuinue}/>
            
                </div>

            </div>
        </div>
    )
}

export default Portfolio