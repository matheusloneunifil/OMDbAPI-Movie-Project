import React, { useState } from 'react';
import '@ui5/webcomponents-icons/dist/AllIcons.js';

import Header from '../Header';
import SearchBar from '../SearchBar';
import MovieList from '../MovieList';
import Footer from '../Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
