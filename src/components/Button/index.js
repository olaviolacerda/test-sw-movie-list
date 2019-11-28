import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Button({className, children, handleClick}) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {children || null}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: 'button',
  handleClick: () => {},
  children: null,
};
