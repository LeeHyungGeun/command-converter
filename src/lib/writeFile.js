import fs from 'fs';
import path from 'path';
import callsite from 'callsite';
import config from '../config';
const {
    fileName,
    folderName
} = config;

function writeFile({
    body
}) {
    // const stack = callsite();
    // const requester = stack[1].getFileName();
    // const __callerdirname = path.dirname(requester);    // a directory path of caller
    fs.writeFile(`${folderName}/${fileName}`, body);
}
export default writeFile;