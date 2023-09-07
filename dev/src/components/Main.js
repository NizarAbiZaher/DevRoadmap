import React from 'react'
import './Main.css'
const Main = ({ number, title, description, content, approxDuration }) => {
  return (
    <div className='main'>
      <div className='card'>
        <div className='number'> {number} </div>
        <h2 className='title'>{title}</h2>
        <p className='p'>{description}</p>
        <div className='buttons'>
          {content.map(({ link, imageSrc }, index) => (
            <a key={index} href={link} className='image-link'>
              <div className='image-placeholder'>
                <img src={imageSrc} alt={`Course ${number}`} />
              </div>
            </a>
          ))}
        </div>
        <p className='p'>{approxDuration}</p>
      </div>
    </div>
  );
};


export default Main