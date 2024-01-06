import React from 'react'
import '../styles/project.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import pe from '../Images/homebg.jpg'

const Project = ({ title,color, url, giturl,imageSrc }) => {
    const iconStyle = {
        color: 'white',
        fontSize: '24px',
        marginRight: '0.3em'
    };
    return (
        <div className='project'>
            <div className="project-image">
                <img src={imageSrc} alt="" />
            </div>
            <div className="down">
                <div className="title">{title}</div>
                <div className="links">
                    <div className="frontend-deployment">
                        <VisibilityIcon style={iconStyle} />
                        <a href={url} target='blank'>Visit</a>
                    </div>
                    {/* <div className="backend-deployment"></div> */}
                    <div className="github">
                        <GitHubIcon style={iconStyle} />
                        <a href={giturl} target='blank'>Code</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project