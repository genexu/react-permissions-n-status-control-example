const { override, addWebpackAlias, addBabelPresets } = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPresets([
    '@babel/preset-react',
    {
      runtime: 'automatic',
      importSource: '@emotion/react',
    },
  ]),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src/'),
    ['@root']: path.resolve(__dirname),
  }),
);
