module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 version', 'ie >= 10'],
    }),
    require('postcss-simple-vars')({}),
    require('postcss-nested')({}),
  ],
};
