import React, { useEffect } from 'react';
import { Input } from '@ui5/webcomponents-react';
import UIButton from '../UIButton';

import './SearchBar.scss';
import { fetchMovieByName, fetchMovieList } from '../../services/movieService';
import { useDispatch } from 'react-redux';
import { setLoading, setMovie } from '../../state/actions/movieActions';
import { getRandomMovie } from '../../constant';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState<string>('');

  const handleInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const fetchMovies = async () => {
    dispatch(setLoading(true));
    const data = await fetchMovieList(searchValue || getRandomMovie());
    dispatch(setMovie(data));
    dispatch(setLoading(false));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = async () => {
    if (searchValue !== "") {
      const data = await fetchMovieByName(searchValue);
      dispatch(setMovie(data));
      dispatch(setLoading(false));
    } else {
      fetchMovies();
    }
  };

  const handleReset = () => {
    setSearchValue('');
    fetchMovies();
  };

  return (
    <>
      <div className="sub-header">
        <h4>OMDbAPI</h4>
        <p>This is an SPA(Single Page Application) that fetches information on a piece of media, searched by name(expanded from just movies, so we can output TV shows, for example), from the mentioned API and shows it to the user, with  relevant information displayed, such as actors, writers, director, available languages and the review scores. </p>
      </div>
      <div className="search-bar">
        <Input
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <UIButton onClick={handleSearch}>Search</UIButton>
        <UIButton onClick={handleReset}>Reset</UIButton>
      </div>
    </>
  );
};

export default SearchBar;
