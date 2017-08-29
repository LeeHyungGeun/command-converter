'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _callsite = require('callsite');

var _callsite2 = _interopRequireDefault(_callsite);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileName = _config2.default.fileName,
    folderName = _config2.default.folderName;


function writeFile(_ref) {
    var body = _ref.body;

    // const stack = callsite();
    // const requester = stack[1].getFileName();
    // const __callerdirname = path.dirname(requester);    // a directory path of caller
    _fs2.default.writeFile(folderName + '/' + fileName, body);
}
exports.default = writeFile;