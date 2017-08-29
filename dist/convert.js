'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lib = require('./lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Convert = function () {
    function Convert() {
        _classCallCheck(this, Convert);

        this.search = this.search.bind(this);
        this.convertUrl = this.convertUrl.bind(this);
        this.convertHtml = this.convertHtml.bind(this);
    }

    _createClass(Convert, [{
        key: 'search',
        value: async function search(_ref) {
            var _ref$url = _ref.url,
                url = _ref$url === undefined ? '' : _ref$url,
                _ref$html = _ref.html,
                html = _ref$html === undefined ? '' : _ref$html;

            if (html === '' && url === '') {
                console.error('html or url arguments are required.');
            }
            var result = await this.convertUrl(url);
            console.log(result);
            return result;
        }
    }, {
        key: 'convertUrl',
        value: function convertUrl(url) {
            return new Promise(function (resolve, reject) {
                (0, _request2.default)({
                    url: url
                }, async function (err, res, body) {
                    if (err) {
                        return console.error('err: ', err);
                    }
                    body = await (0, _lib.convertStyle)(body);
                    body = await (0, _lib.convertClassName)(body);
                    resolve(body);
                    // save a file
                    (0, _lib.writeFile)({
                        body: body
                    });
                });
            });
        }
    }, {
        key: 'convertHtml',
        value: function convertHtml(body) {
            return new Promise(async function (resolve, reject) {
                body = await (0, _lib.convertStyle)(body);
                body = await (0, _lib.convertClassName)(body);
                resolve(body);
                // save a file
                (0, _lib.writeFile)({
                    body: body
                });
            });
        }
    }]);

    return Convert;
}();

exports.default = Convert;