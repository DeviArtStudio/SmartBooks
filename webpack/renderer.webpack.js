module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      util: require.resolve('util/'),
      child_process: false,
      fs: false,
    },
  },
  module: {
    rules: require('./rules.webpack'),
  },
}
