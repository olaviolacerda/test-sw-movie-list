import React, {useRef, useEffect} from 'react';
import {TimelineLite} from 'gsap';

import './styles.scss';

export default function MovieDescription({movie}) {
  const {episode_id: movieId, title, opening_crawl: description} = movie;
  const content = useRef();

  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(content.current, 200, {top: '-170%'});
  }, []);

  return (
    <div className="crawl-container">
      <section className="crawl" ref={content}>
        <h1 className="title">{`Episode ${movieId}`}</h1>
        <h2 className="subtitle">{title}</h2>
        <p>{description}</p>
      </section>
    </div>
  );
}
