import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App test', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
