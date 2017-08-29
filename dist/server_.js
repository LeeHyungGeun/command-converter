'use strict';

var _convert = require('./convert');

var _convert2 = _interopRequireDefault(_convert);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// debugger;

var url = process.argv.slice(2)[0];
// if (!url) {
//     return false;
// }

var convert = new _convert2.default();
convert.search({
    // url: 'https://line.worksmobile.com/jp/',
    url: url,
    fileName: 'urlResult.html'
});

// let args = process.argv.slice(2).filter(function(arg) {
//     if (arg) {
//         console.log(arg);
//     }
// });
// let execArgv = process.execArgv.slice(1)
// console.log(args);


// import Convert from './convert';
// import fs from 'fs';

// // 1. Body of a File Convert
// fs.readFile(__dirname + '/tag.txt', 'utf8', function(err, data) {
//     const convert = new Convert();
//     convert.search({     
//         html: data,
//         fileName: 'fileResult.html'
//     });
// });

// // 2. Body of an URL Convert
// const convert = new Convert();
// convert.search({
//     url: 'https://line.worksmobile.com/jp/',
//     fileName: 'urlResult.html'
// });