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
                    <p>I help you build brand for your business at an affordable price.Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.Delivering work within time and budget which meets client’s requirements is our moto.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Libero suscipit sequi voluptates cumque consequatur error a adipisci rem?
                        Repudiandae a labore perspiciatis ipsam ipsum,
                        incidunt vero commodi. Amet, ab adipisci.
                    </p>
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
                <Progress figure="2+" text="Years Experience" />
                <Progress figure="5+" text="Happy Clients" />
                <Progress figure="5+" text="Projects" />
                <Progress figure="3+" text="Awards" />

            </div>
        </div>
    )
}

export default About