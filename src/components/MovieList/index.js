import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import MovieCard from '../MovieCard';

import './styles.scss';

export default function MovieList({movies}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: {delay: i * 0.2},
    }));
  }, []);

  return (
    <motion.ul className="movie-list">
      {movies.map(movie => (
        <motion.li key={movie.episode_id} custom={movie.episode_id} animate={controls}>
          <MovieCard movie={movie} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
