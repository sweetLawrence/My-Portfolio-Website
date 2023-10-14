import '../styles/button.css';
import React from 'react'

const Button = ({ content, bgcolor }) => {
  const buttonStyle = {
    // background:white,
    color:'black',
    transition: 'background-color 0.3s',
  };

  function handleMouseEnter(e) {
    e.currentTarget.style.backgroundColor = bgcolor;
    e.currentTarget.style.color = "white";
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.color = bgcolor;
  }
  return (
    <div className='button'>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}>{content}</button>
    </div>
  )
}

export default Button