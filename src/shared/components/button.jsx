// @flow

import React, { PropTypes } from 'react';

/**
 *
 * Button Component
 *
 * A component that's reusable for making different buttons, and can be used
 * to work with our Redux Store using the `handleClick` function.
 *
 */

const Button = ({ handleClick, label } : { handleClick: Function, label: string }) => (
  <button className="button" onClick={handleClick}>{label}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
