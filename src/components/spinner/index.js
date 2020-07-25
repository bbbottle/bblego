import React from 'react';
import classname from 'classnames';
import '../../styles/spinner.scss'

export const BlinkDot = () => {
  return (
    <span className="blink-dot">·</span>
  );
};

export const TickLoader = ({ absCenter, style }) => {
  return (
    <div
      style={style}
      className={classname("tick-loader", {
        center: absCenter
      })}
    />
  )
};

