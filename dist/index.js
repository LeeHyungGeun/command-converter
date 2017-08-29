'use strict';

var _convert = require('./convert');

var _convert2 = _interopRequireDefault(_convert);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = process.argv.slice(2)[0];
if (!url) {
    console.error('please insert an url to convert.');
} else {
    var convert = new _convert2.default();
    convert.search({
        url: url
    });
}