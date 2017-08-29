import request from 'request';
import cheerio from 'cheerio';
import fs from 'fs';
import {
    convertClassName,
    convertStyle,
    writeFile
} from './lib';

class Convert {
    constructor() {
        this.search = this.search.bind(this);
        this.convertUrl = this.convertUrl.bind(this);
        this.convertHtml = this.convertHtml.bind(this);
    }
    async search({
        url = '',
        html = ''
    }) {
        if (html === '' && url === '') {
            console.error('html or url arguments are required.')
        }
        let result = await this.convertUrl(url);
        console.log(result);
        return result;
    }
    convertUrl(url) {
        return new Promise(function(resolve, reject) {
            request({
                url
            }, async function (err, res, body) {
                if (err) {
                    return console.error('err: ', err);
                }
                body = await convertStyle(body);
                body = await convertClassName(body);
                resolve(body);
                // save a file
                writeFile({
                    body
                });
            });
        });
    }
    convertHtml(body) {
        return new Promise(async function(resolve, reject) {
            body = await convertStyle(body);
            body = await convertClassName(body);
            resolve(body);
            // save a file
            writeFile({
                body
            });
        });
    }
}
export default Convert;