// Card.jsx
import React, { useState } from 'react';
import { Card as UI5Card } from '@ui5/webcomponents-react';
import UIButton from '../UIButton';
import RatingStar from '../RatingStar';
import NoFoundImage from '../../assets/images/no-found.jpg';
import HeartIcon from '../../assets/images/heart.svg';
import HeartFillIcon from '../../assets/images/fill-heart.svg';

import './Card.scss';

const Card = ({ movie, last }: any) => {
  const [wiselist, setWishlist] = useState(false);
  const handleImageError = (event: any) => {
    event.target.src = NoFoundImage;
  }

  return (
    <UI5Card style={last ? { marginBottom: '3rem' } : {}}>
      <div className="card-content">
        <div className="details">
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <p><span style={{ fontWeight: 'bold' }}>Actor:</span> {movie.Actors}</p>
          <p><span style={{ fontWeight: 'bold' }}>Director:</span> {movie.Director}</p>
          <p><span style={{ fontWeight: 'bold' }}>Writer:</span> {movie.Writer}</p>
          <p><span style={{ fontWeight: 'bold' }}>Language:</span> {movie.Language}</p>
          <RatingStar rating={Number(movie.imdbRating)/2} imdbVotes={movie.imdbVotes} /> 
          <button className='styled-button' onClick={() => setWishlist(!wiselist)}><img src={wiselist ? HeartFillIcon : HeartIcon} style={{ width: "20px", height: '20px', marginRight: 6 }} />Favourite</button>
        </div>
        <img className='poster' src={movie.Poster === 'N/A' ? NoFoundImage : movie.Poster} alt="Movie Poster" onError={handleImageError} />
      </div>
    </UI5Card>
  );
};

export default Card;
