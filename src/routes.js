import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Showcase from './screens/Showcase';
import MovieDetails from './screens/MovieDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Showcase} />
      <Route path="/movies/:movieId/details" component={MovieDetails} />
    </BrowserRouter>
  );
}
