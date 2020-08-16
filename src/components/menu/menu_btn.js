import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const MenuBtn = ({
  onClick,
  className,
  style,
  hidden,
}) => {
  return (
    <button
      type="button"
      style={style}
      className={cn('menu-button', className, {
        hidden
      })}
      onClick={onClick}
    />
  );
};

MenuBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};