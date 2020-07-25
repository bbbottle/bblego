import React from 'react';

import { withKnobs, boolean, number } from "@storybook/addon-knobs";

import { Menu } from '../components'
import { AboutIcon, PostIcon, EditIcon, RulerIcon } from '../icons';

export default {
  title: 'Menu',
  component: Menu,
  decorators: [withKnobs],
}

const MenuItem = Menu.MenuItem;

export const Default = () => {
  return (
    <Menu
      offset={number("menu item's offset", 50)}
      activePanelIndex={null}
      hideIcon={boolean("hide icon", false)}
      open
    >
      <MenuItem
        title={{
          icon: <RulerIcon />,
          text:  '美术部'
        }}
      />
      <MenuItem
        title={{
          icon: <EditIcon />,
          text:  '编辑部'
        }}
      />
      <MenuItem
        title={{
          icon: <PostIcon />,
          text:  '杂记'
        }}
      />
      <MenuItem
        title={{
          icon: <AboutIcon />,
          text: '关于'
        }}
      />
    </Menu>
  )
};

