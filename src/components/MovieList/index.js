import React from 'react';
import MovieCard from '../MovieCard';

import './styles.scss';

export default function MovieList({movies}) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <li key={movie.episode_id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
