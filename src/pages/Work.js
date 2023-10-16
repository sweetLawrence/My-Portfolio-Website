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
          <WorkDescription icon={<FaReact style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="ReactJS" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<FaDatabase style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="Database Management" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<FaServer style={{ fontSize: '5em', color: color, padding: '.2em' }} />} title="NodeJS" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<FaGit style={{ fontSize: '5em', color: color, padding: '.2em', }} />} title="Git" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<FaCss3 style={{ fontSize: '5em', color: color, padding: '.2em' }} />} title="CSS" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<MdCode style={{ fontSize: '5em', color: color,padding: '.2em' }} />} title="Shell Scripting" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
        </div>
      </div>
    </div>

  )
}

export default Work