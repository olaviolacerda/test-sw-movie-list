import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import PropTypes from 'prop-types';
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'sample title',
      release_date: 'sample date',
      episode_id: 'sample id',
    },
  ],
};
