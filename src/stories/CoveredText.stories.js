import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { CoveredText } from '../components';

export default {
  component: CoveredText,
  title: 'CoveredText',
  decorators: [withKnobs],
};

export const Default = () => <CoveredText>{text('text', '嗨@这个域名')}</CoveredText>;
