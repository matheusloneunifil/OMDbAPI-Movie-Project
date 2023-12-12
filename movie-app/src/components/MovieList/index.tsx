import React from 'react';
import { Label, BusyIndicator } from '@ui5/webcomponents-react';
import { useSelector } from 'react-redux';
import Card from '../Card';

import './MovieList.scss';

const MovieList = () => {
  const movieList = useSelector((state: any) => state.movies.movieList);
  const isLoading = useSelector((state: any) => state.movies.isLoading);

  return (
    <>
      <div className="movie-list">
        {movieList.map((movie: any, index: number) => (
          <Card movie={movie} key={index} last={index + 1 === movieList.length} />
        ))}
      </div>
      {!isLoading && movieList.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Label style={{ fontWeight: 'bold' }}>
            No media found.
          </Label>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <BusyIndicator size='Large' active />
        </div>
      )}
    </>
  );
};

export default MovieList;
