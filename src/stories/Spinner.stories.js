import React from 'react';
import { withKnobs, boolean } from "@storybook/addon-knobs";


import { TickLoader as Spinner } from '../components';

export default {
  component: Spinner,
  title: 'Spinner',
  decorators: [withKnobs],
};

export const Default = () => <Spinner absCenter={boolean("Center", true)} />;




