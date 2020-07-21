import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#51c49f',
  colorSecondary: '#82d5bb',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#c2eade',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#51c49f',
  barSelectedColor: '#82d5bb',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'bbbottle storybook',
  brandUrl: 'https://zjh.im',
  brandImage: 'https://images-repo.sgp1.digitaloceanspaces.com/f5739fe4-4a46-4c6d-9f5f-6ed909b6de36-Logo.png',
});
