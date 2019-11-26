import React, {useState, useEffect} from 'react';

import './styles.scss';

import getMovies from '../../services/movies';

import MovieList from '../../components/MovieList';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Showcase() {
  const [movies, setMovies] = useState();

  async function requestMovies() {
    const receivedMovies = await getMovies();

    if (receivedMovies && receivedMovies.length > 0) {
      setMovies(receivedMovies);
    } else {
      setMovies(`Couldn't get the movies: ${receivedMovies.message}`);
    }
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <div className="container">
      <Navbar />
      {movies && <MovieList movies={movies} />}
      <Footer />
    </div>
  );
}
