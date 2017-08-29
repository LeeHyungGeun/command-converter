import cheerio from 'cheerio';
/**
 * @param {String} html -> Html body
 * @return {String} -> Html body converted
 */
async function convertStyle(html) {
    return new Promise(function(resolve, reject) {
        const regStyle = /(.+)\:\ ?(.+)\;?/;
        const $ = cheerio.load(html, { decodeEntities: false });
        const body = $('*').map(function(index, elem) {
            // Convert a style as an object of style
            if(elem.attribs && elem.attribs.style) {
                let style = elem.attribs.style;
                let styles = style.split(';');
                let tempStyle = '{';
                styles.forEach(function(element) {
                    if (!element) {
                        return;
                    }
                    let keyValue = regStyle.exec(element);
                    let key = keyValue[1];
                    let value = keyValue[2];
                    tempStyle += `${key}: ${value},`
                }, this);
                if (tempStyle[tempStyle.length] === ',') {
                    tempStyle.length = tempStyle.length - 1;
                }
                tempStyle = tempStyle.replace(/(\,)$/, '}');
                elem.attribs.style = tempStyle;
            }
            return elem;
        });
        let tempBody = $(body).html();
        tempBody = tempBody.replace(/style\=\"(.*?)\"/ig, 'style=\{$1\}');
        resolve(tempBody);
    });
}
export default convertStyle;