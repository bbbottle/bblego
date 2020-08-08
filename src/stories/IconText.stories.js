import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { IconText } from '../components';
import { ErrorIcon } from '../icons';
import {COLORS} from '../styles/design_system_styles';

export default {
  component: IconText,
  title: 'IconText',
  decorators: [withKnobs],
};

export const Default = () => (
  <IconText
    icon={<ErrorIcon />}
    color={COLORS.$red3}
  >
    {text('text', 'ERROR')}
  </IconText>
);
