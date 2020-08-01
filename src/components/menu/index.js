import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../../styles/menu.scss';

const AddExtraPropsTo = (Component, extraProps) => {
  return <Component.type {...Component.props} {...extraProps} />;
};

const MenuBtn = ({
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

const MinPanelWidth = 100;

const MenuPanel = (props) => {
  const {
    children,
    offset,
    open,
    activePanelIndex,
    menuBtnStyle = {},
    hideIcon,
    getScrollableDomByActivePanel,
  } = props;

  const [isOpen, toggleOpenStatus] = useState(open);
  const [activePanel, active] = useState(activePanelIndex);

  const Offset = offset || (window.innerWidth - MinPanelWidth) / children.length;
  return (
    <div
      data-active-panel={activePanel}
      className={cn('menu-panel-container', {
        open: isOpen,
      })}
    >
      {
        children.map((c, i) => {
          const isLastChild = i === children.length - 1;
          const pos = isOpen ? i * Offset : 0;
          const activePos = {
            top: 0,
            left: 0,
          };
          const normalPos = {
            top: pos,
            left: pos,
          };
          const inactivePos = {
            top: 'calc(100% + 20px)', // hide shadow
            left: i * Offset,
          };
          let retPos;
          if (activePanel !== null) {
            retPos = activePanel === i ? activePos : inactivePos;
          } else {
            retPos = normalPos;
          }

          return (
            <div
              tabIndex={-1}
              role="button"
              className={cn('menu-panel', {
                last: isLastChild,
                active: activePanel === i,
              })}
              onClick={() => {
                const animationDelay = 700;
                active(i);
                setTimeout(() => {
                  toggleOpenStatus(false);
                }, animationDelay);
              }}
              onKeyPress={() => {}}
              style={{
                ...retPos,
                zIndex: i,
              }}
              key={i}
            >
              <div className="panel">
                {AddExtraPropsTo(c, { showChildren: (activePanel === i || isLastChild)})}
              </div>
            </div>
          );
        })
      }
      {
        <MenuBtn
          className={cn({ hidden: isOpen })}
          scrollableDom={getScrollableDomByActivePanel
            ? getScrollableDomByActivePanel(activePanel)
            : null
          }
          hidden={hideIcon}
          style={{...menuBtnStyle, zIndex: children.length}}
          onClick={() => {
            if (isOpen) { return; }
            const animationDelay = 300;
            setTimeout(() => {
              active(null);
              toggleOpenStatus(!isOpen);
            }, animationDelay);
          }}
        />
      }
    </div>
  );
};

const MenuTitle = (props) => {
  const { icon, title } = props;
  return (
    <div className="panel-title">
      {icon}
      {title}
    </div>
  )
};

MenuPanel.MenuItem = (props) => {
  const {
    title,
    showChildren,
    children,
  } = props;

  return (
    <div className="menu-item">
      <MenuTitle
        icon={title.icon}
        title={title.text}
      />
      <div className="menu-item-content">
        {showChildren && children}
      </div>
    </div>
  );
};

MenuPanel.MenuItem.propTypes = {
  showChildren: PropTypes.bool.isRequired,
  title: PropTypes.shape({
    icon: PropTypes.element,
    text: PropTypes.string,
  }).isRequired,
};

MenuPanel.propTypes = {
};

MenuPanel.defaultProps = {
  titles: [],
};

export default MenuPanel;
