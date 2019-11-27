import React, {useState, useEffect} from 'react';

import {getMovies} from '../../services/movies';

import MovieList from '../../components/MovieList';

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

  return <>{movies && <MovieList movies={movies} />}</>;
}
