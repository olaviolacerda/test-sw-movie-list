import React from 'react';
import Button from '../Button';

import './styles.scss';

export default function MovieCard({movie}) {
  const {title, release_date: date} = movie;
  return (
    <div className="card">
      <h5 className="title">{title}</h5>
      <p className="date">{date}</p>
      <Button />
    </div>
  );
}
