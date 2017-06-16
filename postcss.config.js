var fs = require('fs');
var path = require('path');
var postcss = require('postcss');

module.exports = {
  map: true,
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('cssnano'),
  ],
};
