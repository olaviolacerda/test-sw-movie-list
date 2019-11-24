import React from 'react';
import {shallow} from 'enzyme';
import Button from '../../components/Button';

describe('Component Button test', () => {
  it('should render without crashing', () => {
    shallow(<Button />);
  });
});
