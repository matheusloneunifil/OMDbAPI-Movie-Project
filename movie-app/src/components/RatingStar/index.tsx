// RatingStar.tsx
import React from 'react';
import { Icon } from '@ui5/webcomponents-react';
import './RatingStar.scss';

interface RatingStarProps {
  rating: number;
  imdbVotes: any;
}

const RatingStar: React.FC<RatingStarProps> = ({ rating, imdbVotes }) => {
  const MAX_STARS = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= MAX_STARS; i++) {
      const starClassName = i <= rating ? 'filled' : 'outline';
      stars.push(<Icon key={i} name={'favorite'} className={starClassName} />);
    }
    return stars;
  };

  return <div className="rating-star"><span style={{ fontWeight: 'bold' }}>Review:</span> &nbsp;{renderStars()} ({imdbVotes}) Votes</div>;
};

export default RatingStar;
