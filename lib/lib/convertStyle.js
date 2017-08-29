'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String} html -> Html body
 * @return {String} -> Html body converted
 */
async function convertStyle(html) {
    return new Promise(function (resolve, reject) {
        var regStyle = /(.+)\:\ ?(.+)\;?/;
        var $ = _cheerio2.default.load(html, { decodeEntities: false });
        var body = $('*').map(function (index, elem) {
            // Convert a style as an object of style
            if (elem.attribs && elem.attribs.style) {
                var style = elem.attribs.style;
                var styles = style.split(';');
                var tempStyle = '{';
                styles.forEach(function (element) {
                    if (!element) {
                        return;
                    }
                    var keyValue = regStyle.exec(element);
                    var key = keyValue[1];
                    var value = keyValue[2];
                    tempStyle += key + ': ' + value + ',';
                }, this);
                if (tempStyle[tempStyle.length] === ',') {
                    tempStyle.length = tempStyle.length - 1;
                }
                tempStyle = tempStyle.replace(/(\,)$/, '}');
                elem.attribs.style = tempStyle;
            }
            return elem;
        });
        var tempBody = $(body).html();
        tempBody = tempBody.replace(/style\=\"(.*?)\"/ig, 'style=\{$1\}');
        resolve(tempBody);
    });
}
exports.default = convertStyle;