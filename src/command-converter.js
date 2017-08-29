import Convert from './convert';
import fs from 'fs';

const url = process.argv.slice(2)[0];
if (!url) {
    console.error('please insert an url to convert.');
}
else {
    const convert = new Convert();
    convert.search({
        url
    });
}