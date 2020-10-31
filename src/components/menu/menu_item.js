import React from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';


import { IconText } from "../icon_text";
import { COLORS } from "../..";

export const MenuItem = (props) => {
  const {
    title,
    isFullScreen,
    showChildren,
    children,
  } = props;

  return (
    <div className="menu-item">
      <IconText
        {...title}
        color={COLORS.$green1}
        className="panel-title"
      />
      <div className={cn("menu-item-content", {
        fullScreen: isFullScreen,
      })}>
        {showChildren && children}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  showChildren: PropTypes.bool.isRequired,
  title: PropTypes.shape({
    icon: PropTypes.element,
    text: PropTypes.string,
  }).isRequired,
};