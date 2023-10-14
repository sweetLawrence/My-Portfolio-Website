import React from 'react'

const Client = ({name,title,cell,remarks,color}) => {
    return (
        <div className='client-remarks'>
            <div className="top-section">
                <h2>{name}</h2>
                <p className="title">{title}</p>
                <p className="cell">{cell}</p>
            </div>
            <div className="remarks">
                {remarks}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit id hic porro aliquid nisi possimus ipsum blanditiis, architecto nesciunt! */}
            </div>
        </div>
    )
}

export default Client