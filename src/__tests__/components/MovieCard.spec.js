import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from '../../components/MovieCard';

describe('Movie Card component', () => {
  it('should render without crashing', () => {
    shallow(<MovieCard movie={{}} />);

    expect(MovieCard).toBeDefined();
  });

  it('should render correctly', () => {
    const movieCardElement = shallow(<MovieCard movie={{}} />);

    expect(movieCardElement).toMatchSnapshot();
  });
});
