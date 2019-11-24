import React, {useState, useEffect} from 'react';

import './styles.scss';

import getMovies from '../../services/movies';

import Button from '../../components/Button';

export default function Main() {
  const [movie, setMovie] = useState('');

  async function requestMovies() {
    const movies = await getMovies();
    if (movies && movies.length > 0) {
      setMovie(movies[Math.floor(Math.random() * movies.length)].title);
    } else {
      setMovie(`Couldn't get the movies: ${movies.message}`);
    }
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <div className="container">
      <div className="presentation">
        <h1>Welcome to ReactJS Boilerplate</h1>
        <p>
          Just a simple and useful boilerplate for my personal works and study. Use it
          well, it is free to use and modify
          <span role="img" aria-label="smileface">
            {' '}
            😉
          </span>
          <br />
          Here is an example of a customizable and simple Button component
        </p>
        <Button handleClick={requestMovies}>Click me to change the movie</Button>
        <p>{movie}</p>
      </div>
    </div>
  );
}
