module.exports = function(config) {
  config.set({
    basePath: '..',
    browsers: ['Chrome'],
    frameworks: ['chai', 'mocha'],
    files: ['test/*test.js'],
    preprocessors: {
      'test/*test.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
        ],
      },
    },
  });
};
