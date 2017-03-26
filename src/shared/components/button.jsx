// @flow

import React, { PropTypes } from 'react';

const Button = ({ handleClick, label, classNames } : { handleClick: Function, label: string }) => (
  <button className="button" onClick={handleClick}>{label}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
