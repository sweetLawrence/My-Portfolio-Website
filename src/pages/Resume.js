import '../styles/resume.css';
import React from 'react'
import Utilitybox from '../components/Utilitybox'

const Resume = ({ color }) => {
    const underlineStyle = {
        backgroundColor: color,
      }
    return (
        <div className="main-container">
            <div className='resume'>
                <div className="top">
                    <h1>Resume</h1>
                    <div 
                    style={underlineStyle}
                    className="underline"></div>
                </div>
                <div className="bottom-part">
                    <div className="left">
                        <h2>My Education</h2>
                        <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} />
                        <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} />
                    </div>
                    <div className="right">
                        <h2>My Experience</h2>
                        <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} />
                        <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} />
                    </div>



                </div>

            </div>
        </div>

    )
}

export default Resume