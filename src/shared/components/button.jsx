// @flow

import React, { PropTypes } from 'react';

const Button = ({ handleClick, label } : { handleClick: Function, label: string }) => (
  <button onClick={handleClick}>{label}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
