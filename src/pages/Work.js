import React from 'react'
import '../styles/work.css';
import WorkDescription from '../components/WorkDescription';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FaDatabase, FaReact, FaServer } from 'react-icons/fa'
import { MdCode, MdSource, MdWeb } from 'react-icons/md'
import { MdStorage } from 'react-icons/md'
import { FaGit, FaCss3 } from 'react-icons/fa'
// GrReactjs

const Work = ({ color }) => {
  const iconStyle = {
    // color: color,
  }
  const underlineStyle = {
    backgroundColor: color,
  }
  return (
    <div className="main">
      <div className='work'>
        <div className="top">
          <h1>My Work</h1>
          <div
            style={underlineStyle}
            className="underline"></div>
        </div>

        <div className="bottom-part">
          <WorkDescription icon={<FaReact style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="ReactJS" content="I excel at developing dynamic and interactive user interfaces, enhancing user experiences and optimizing web applications. With expertise in this modern library, I'm your go-to partner for top-tier React development." />
          <WorkDescription icon={<FaDatabase style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="Database Management" content="I ensure seamless data organization, retrieval, and security. From designing efficient database systems to maintaining data integrity, I offer professional solutions to keep your information assets in top shape." />
          <WorkDescription icon={<FaServer style={{ fontSize: '5em', color: color, padding: '.2em' }} />} title="NodeJS" content="I specialize in server-side JavaScript, building fast, scalable, and efficient web applications. I harness the power of Node.js to deliver high-performance solutions for your digital needs." />
          <WorkDescription icon={<FaGit style={{ fontSize: '5em', color: color, padding: '.2em', }} />} title="Git" content="I expertly manage version control for your projects, ensuring efficient collaboration and code management. With Git, your development process is streamlined, secure, and highly organized." />
          <WorkDescription icon={<FaCss3 style={{ fontSize: '5em', color: color, padding: '.2em' }} />} title="CSS" content="I transform web designs into beautiful and responsive interfaces. With a keen eye for aesthetics and a deep understanding of cascading style sheets, I bring your web content to life with elegance and precision." />
          <WorkDescription icon={<MdCode style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="Shell Scripting" content=" I automate and streamline tasks, making your system management efficient and error-free. With expertise in scripting languages, I simplify complex operations for enhanced productivity and reliability." />
        </div>
      </div>
    </div>

  )
}

export default Work