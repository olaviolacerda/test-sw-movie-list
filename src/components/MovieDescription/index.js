import React, {useRef, useEffect} from 'react';
import {TimelineLite} from 'gsap';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';
import Button from '../Button';

const MovieDescription = ({movie, history}) => {
  const {episode_id: movieId, title, opening_crawl: description} = movie;
  const content = useRef();

  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(content.current, 200, {top: '-500%'});
  }, []);

  return (
    <>
      <Button className="return-button" handleClick={history.goBack}>
        Return
      </Button>
      <div className="crawl-container">
        <section className="crawl" ref={content}>
          <h1 className="title">{`Episode ${movieId}`}</h1>
          <h2 className="subtitle">{title}</h2>
          <p>{description}</p>
        </section>
      </div>
    </>
  );
};

export default withRouter(MovieDescription);

MovieDescription.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string),
  history: PropTypes.objectOf(PropTypes.object),
};

MovieDescription.defaultProps = {
  movie: {
    title: 'sample title',
    opening_crawl: 'sample opening crawl',
    episode_id: 'sample id',
  },
  history: {
    goBack: () => {},
  },
};
