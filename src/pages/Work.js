import React from 'react'
import '../styles/work.css';
import WorkDescription from '../components/WorkDescription';
import JavascriptIcon from '@mui/icons-material/Javascript';

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
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
          <WorkDescription icon={<JavascriptIcon style={{ fontSize: '5em', color: color }} />} title="Web Dev" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis modi optio ad earum nulla vero! Odio magnam odit delectus sed sint quod quae, in labore ipsa commodi, quos consequatur." />
        </div>
      </div>
    </div>

  )
}

export default Work