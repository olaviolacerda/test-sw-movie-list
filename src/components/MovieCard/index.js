import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';

import './styles.scss';

export default function MovieCard({movie}) {
  const {title, release_date: date} = movie;
  return (
    <div className="card">
      <h5 className="title">{title}</h5>
      <p className="date">{date}</p>
      <Button>
        <Link to={`/movies/${movie.episode_id}/details`}>See More</Link>
      </Button>
    </div>
  );
}
