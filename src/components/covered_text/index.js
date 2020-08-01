import React from 'react';
import '../../styles/covered_text.scss';

export const CoveredText = (props) => {
  return (
    <span className="covered-text">
      {props.text || props.children}
    </span>
  )
};
