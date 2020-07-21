import React from 'react';
import '../../styles/input.scss';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input
      className="bblego-input"
      {...props}
    />
  )
};
