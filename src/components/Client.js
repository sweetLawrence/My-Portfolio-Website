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
            </div>
        </div>
    )
}

export default Client