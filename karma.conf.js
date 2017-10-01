module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['chai', 'mocha'],
    files: ['*test.js'],
    preprocessors: {
      '*test.js': ['webpack', 'sourcemap'],
    },
    singleRun: true,
    webpack: {
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
