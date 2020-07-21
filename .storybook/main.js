const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const srcPath = path.resolve(__dirname, '../src');
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        {
          loader: "sass-loader",
          options: {
            prependData: `@import '${srcPath}/styles/design_system_styles.scss';`,
          }
        },
      ],
      include: srcPath
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: `bblego.min.css`,
        allChunks: true,
      }),
    );

    // Return the altered config
    return config;
  },
};
