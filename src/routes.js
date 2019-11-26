import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Showcase from './screens/Showcase';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Showcase} />
    </BrowserRouter>
  );
}
