import React from 'react'
import '../styles/workdescription.css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const WorkDescription = ({icon,title,content}) => {
  return (
    <div className='work-description'>
        <div className="icon">
          {icon}
          {/* <JavascriptIcon style={{ fontSize: '5em' }}/> */}
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="description">{content}</div>
        </div>
    </div>
  )
}

export default WorkDescription