import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';

import './styles.scss';

import {getMovieDetails} from '../../services/movies';
import MovieDescription from '../../components/MovieDescription';

export default function MovieDetails({match}) {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const {movieId} = match.params;

  async function requestDetails() {
    const receivedMovie = await getMovieDetails(movieId);

    if (!receivedMovie) {
      setMovie(`Couldn't get details about movie: ${receivedMovie.message}`);
    } else {
      setMovie(receivedMovie);
      setLoading(false);
    }
  }

  useEffect(() => {
    requestDetails();
  }, []);

  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type="spinningBubbles" color="#edec51" />
      ) : (
        <MovieDescription movie={movie} />
      )}
    </>
  );
}
