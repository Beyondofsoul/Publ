const { merge } = require('webpack-merge');

const common = require('./webpack/common');

module.exports = (env, argv) => {
  return argv.mode === 'production' ? require('./webpack/prod') : require('./webpack/dev');
};
