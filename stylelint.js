module.exports = {
  plugins: [
    require('postcss-simple-vars')({}),
    require('postcss-nested')({}),
    require('stylelint')({}),
    require('postcss-reporter')({
      throwError: true,
    }),
  ],
};
