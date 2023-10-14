import '../styles/utilitybox.css';
import React from 'react'

const Utilitybox = ({ date, title, subtitle, content, bgcolor }) => {
    return (
        <div className='utility'>
            <div className="container">
                <div className="date" style={{ backgroundColor: bgcolor }}>{date}</div>
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Utilitybox