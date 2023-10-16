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
                        <Utilitybox date="2022-present" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="My telecom engineering course in college enhances my web development skills by imparting deep knowledge of network protocols, data transmission, and signal processing. This background is invaluable in optimizing web applications for efficiency and connectivity, making me a more versatile developer." bgcolor={color} />
                        {/* <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} /> */}
                    </div>
                    <div className="right">
                        <h2>My Experience</h2>
                        <Utilitybox date="2021-present" title="Freelance Development" subtitle="KISII, KENYA" content="As a freelance web developer, I've had the opportunity to collaborate with colleges Kenyenya TTC and Orogare TVC, creating custom web solutions that cater to their unique needs. Through these projects, I've honed my skills, gained valuable experience in project management, and fine-tuned my problem-solving abilities. This diverse experience has made me a versatile and adaptable web developer, well-equipped to meet the demands of various clients." bgcolor={color} />
                        {/* <Utilitybox date="2010-2012" title="Telecommunication and Information Engineering" subtitle="JKUAT" content="I love this course in as much as it is sometimes difficult to comprehend" bgcolor={color} /> */}
                    </div>



                </div>

            </div>
        </div>

    )
}

export default Resume