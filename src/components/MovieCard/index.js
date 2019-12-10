import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

export default function MovieCard({movie}) {
  const {title, release_date: date, episode_id: movieId} = movie;
  return (
    <div className="card">
      <h5 className="title">{title}</h5>
      <p className="date">{date}</p>
      <Link className="button" to={`/movies/${movieId}/details`}>
        Details
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
};

MovieCard.defaultProps = {
  movie: {
    title: 'sample title',
    release_date: 'sample date',
    episode_id: 'sample id',
  },
};
