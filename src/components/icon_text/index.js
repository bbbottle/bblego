import React from 'react';

import '../../styles/icon_text.scss';
import { COLORS } from '../../styles/design_system_styles.js';

export const IconText = (props) => {
  return (
    <span
      className="icon-text"
      style={{ color: props.color || COLORS.$black}}
    >
      {props.icon}
      {props.text || props.children}
    </span>
  )
};
