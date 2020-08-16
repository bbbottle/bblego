import React from 'react';
import cn from 'classnames';

import '../../styles/icon_text.scss';
import { COLORS } from '../..';

export const IconText = (props) => {
  return (
    <span
      className={cn('icon-text', props.className || '')}
      style={{ color: props.color || COLORS.$black}}
    >
      {props.icon}
      {props.text || props.children}
    </span>
  )
};
