const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

console.log('Path Aliases: ', {
  '@': path.resolve(__dirname, 'src'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@pages': path.resolve(__dirname, 'src/pages'),
});

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
  })
);
