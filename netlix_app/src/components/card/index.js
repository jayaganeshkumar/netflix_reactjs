import React from 'react';
import './card.css';

const Card = (cc) => {
  // console.log(props)

  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img
            className='card__img'
            // style={props.style}
            src={cc.imgSrc}
            alt='image'
          />
          <div className='card__info'>
            <span className='card__category'>{cc.title}</span>
            <h3 className='card__title'>{cc.sname}</h3>
            <a href={cc.link} target='_blank' rel='link'>
              <button> Watch Now</button> <p />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;