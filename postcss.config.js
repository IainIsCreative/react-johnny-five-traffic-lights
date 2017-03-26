var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var atImport = require('postcss-import');

// var styles = fs('./static/styles/main.css', 'utf-8');

module.exports = {
  // map: true,
  // from: path.join(__dirname, 'static/styles/main.css'),
  // to: path.join(__dirname, 'dist/static/styles/style.css'),
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('cssnano'),
  ],
};
