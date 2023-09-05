import React from 'react'
import './Main.css'
const Main = ({ number, title, description, link, imageSrc }) => {
  return (
    <div className='main'>
      <div className='card'>
        <div className='number'> {number} </div>
        <h2 className='title'>{title}</h2>
        <p>{description}</p>
        <div className='buttons'>
          <a href={link} className='image-link'>
            <div className='image-placeholder'>
            <img src={imageSrc} alt={`Course ${number}`} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main