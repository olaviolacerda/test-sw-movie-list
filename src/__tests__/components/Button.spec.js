import React from 'react';
import {shallow} from 'enzyme';
import Button from '../../components/Button';

describe('Component Button test', () => {
  it('should render without crashing', () => {
    shallow(<Button />);

    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const buttonElement = shallow(
      <Button className="button" onClick={() => {}} type="button">
        button test
      </Button>
    );

    expect(buttonElement).toMatchSnapshot();
  });

  it('should have a button value', () => {
    const buttonElement = shallow(
      <Button className="button" onClick={() => {}} type="button">
        button test
      </Button>
    );
    expect(buttonElement.props().children).toEqual('button test');
  });
});
