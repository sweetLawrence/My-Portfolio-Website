import '../styles/progress.css';
import React from 'react'

const Progress = ({ figure, text }) => {
    return (
        <div className='progress'>
            <div className="figures">{figure}</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default Progress