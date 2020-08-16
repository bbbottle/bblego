import React from 'react';
import cn from 'classnames';

import { MenuBtn } from "./menu_btn";
import { MenuItem} from "./menu_item";

const MinPanelWidth = 100;
const animationDelay = 700;
const shortAnimDelay = 300;

const AddExtraPropsTo = (Component, extraProps) => {
  return <Component.type {...Component.props} {...extraProps} />;
};

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      open,
      activePanelIndex,
    } = props;
    this.state = {
      isOpen: open,
      activePanel: activePanelIndex
    }

    this.Offset = props.offset
      || (window.innerWidth - MinPanelWidth) / props.children.length;
  }

  openMenu = () => {
    this.setState({
      activePanel: null,
      isOpen: true,
    })
  }

  chooseMenuItem = (activePanel) => {
    const choose = () => {
      this.setState({
        activePanel
      }, () => {
        setTimeout(() => {
          this.setState({ isOpen: false });
        }, animationDelay);
      });
    }

    if (this.state.isOpen) {
      choose();
      return;
    }

    this.openMenu();
    setTimeout(choose, animationDelay);
  }

  renderMenuButton = () => {
    const {
      children,
      menuBtnStyle = {},
      hideIcon,
      getScrollableDomByActivePanel,
    } = this.props;

    const {
      isOpen,
      activePanel
    } = this.state;
    return (
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
          setTimeout(() => {
            this.openMenu();
          }, shortAnimDelay);
        }}
      />
    )
  }

  renderMenuItem = (c, i) => {
    const {
      children,
    } = this.props;

    const {
      isOpen,
      activePanel
    } = this.state;

    const isLastChild = i === children.length - 1;
    const pos = isOpen ? i * this.Offset : 0;
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
      left: i * this.Offset,
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
          if (!isOpen) { return; }
          this.chooseMenuItem(i);
        }}
        onKeyPress={() => {}}
        style={{...retPos, zIndex: i}}
        key={i}
      >
        <div className="panel">
          {AddExtraPropsTo(c, { showChildren: (activePanel === i || isLastChild)})}
        </div>
      </div>
    );
  }

  render() {
    const {
      children
    } = this.props;

    const {
      isOpen,
      activePanel
    } = this.state;

    return (
      <div
        data-active-panel={activePanel}
        className={cn('menu-panel-container', {
          open: isOpen,
        })}
      >
        {
          children.map(this.renderMenuItem)
        }
        {this.renderMenuButton()}
      </div>
    )

  }
}

Menu.MenuItem = MenuItem;

export {
  Menu
}