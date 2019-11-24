import React from 'react';
import PropTypes from 'prop-types';

export default function Button({className, children, handleClick}) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  children: 'Click me',
  handleClick: () => console.log('clicked'),
};
