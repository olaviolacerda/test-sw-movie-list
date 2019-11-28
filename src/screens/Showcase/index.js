import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';

import {getMovies} from '../../services/movies';

import MovieList from '../../components/MovieList';

export default function Showcase() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  async function requestMovies() {
    const receivedMovies = await getMovies();

    if (receivedMovies && receivedMovies.length > 0) {
      setMovies(receivedMovies);
      setLoading(false);
    } else {
      setMovies(`Couldn't get the movies: ${receivedMovies.message}`);
    }
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type="spinningBubbles" color="#edec51" />
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
}
