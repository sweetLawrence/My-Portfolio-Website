import React from 'react'
import '../styles/workdescription.css';

const WorkDescription = ({icon,title,content}) => {
  return (
    <div className='work-description'>
        <div className="icon">
          {icon}
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="description">{content}</div>
        </div>
    </div>
  )
}

export default WorkDescription