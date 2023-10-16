import Button from '../components/Button';
import '../styles/about.css';
import React from 'react'
import Resume from '../Files/Resume.pdf'
import Progress from '../components/Progress';

const About = ({ color }) => {
    const emailStyle = {
        color: color,
    }
    const underlineStyle = {
        backgroundColor: color,
    }
    return (
        <div className='about'>
            <div className="top">
                <h1>Know my stuff</h1>
                <div
                    style={underlineStyle}
                    className="underline"></div>
            </div>

            <div className="middlepart">
                <div className="left">
                    <h2>I am <span className="color" style={emailStyle}>Lawrence Tsungu</span>, Web Developer</h2>
                    <p>Crafting Digital Experiences with Precision – Your Trusted Web Developer. I bring your visions to life through innovative web solutions, turning ideas into stunning, user-friendly websites. With a passion for clean code and cutting-edge technology, I'm dedicated to enhancing your online presence and helping your business thrive in the digital landscape. Whether it's a <span 
                    style={emailStyle}
                    className='color'>responsive design, e-commerce functionality, or custom web applications,</span> I'm here to make your online dreams a reality.</p>
                    
                    <p>Not only do I create amazing websites, but I also handle <span style={emailStyle} className='color'>hosting</span> and <span style={emailStyle} className='color'>troubleshooting,</span> ensuring your online presence remains seamless and hassle-free. Whether it's setting up reliable hosting solutions or quickly resolving any technical challenges, I've got you covered. Let's collaborate to shape your online success, providing end-to-end web solutions with a commitment to excellence!</p>
                    <p 
                    style={emailStyle}
                    className='color'>#I always deliver</p>
                </div>
                <div className="right">
                    <ul>
                        <li><span className="bold">Name</span>:Lawrence Tsungu</li>
                        <li><span className="bold">Email</span>:
                            <span style={emailStyle}>tsungulawrence@gmail.com</span></li>
                        <li><span className="bold">Age</span>:19</li>
                        <li><span className="bold">From</span>:Nairobi, Kenya</li>
                    </ul>
                    <div className="download-cv">
                        <a
                            className="downloadlink x"
                            href={Resume}
                            download="Lawrence's Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button content="Download CV" bgcolor={color} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="progress-counter">
                <Progress figure="1.5+" text="Years Experience" />
                <Progress figure="2+" text="Happy Clients" />
                <Progress figure="3+" text="Projects" />
                <Progress figure="2+" text="Awards" />

            </div>
        </div>
    )
}

export default About