import React from 'react';
import cn from 'classnames';

import '../../styles/icon_text.scss';
import { COLORS } from '../..';

export const IconText = (props) => {
  const noop = () => null;
  return (
    <span
      className={cn('icon-text', props.className || '')}
      style={{ color: props.color || COLORS.$black}}
      onClick={props.onClick || noop}
    >
      {props.icon}
      {props.text || props.children}
    </span>
  )
};
