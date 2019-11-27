import React, {useState, useEffect} from 'react';

import './styles.scss';

import {getMovieDetails} from '../../services/movies';
import MovieDescription from '../../components/MovieDescription';

export default function MovieDetails({match}) {
  const [movie, setMovie] = useState();

  const {movieId} = match.params;

  async function requestDetails() {
    const receivedMovie = await getMovieDetails(movieId);

    if (!receivedMovie) {
      setMovie(`Couldn't get details about movie: ${receivedMovie.message}`);
    }

    setMovie(receivedMovie);
  }

  useEffect(() => {
    requestDetails();
  }, []);

  return <>{movie && <MovieDescription movie={movie} />}</>;
}
