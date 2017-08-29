/**
 * @param {String} $ -> Html body
 * @return {String} -> Html body converted
 */
function convertClassName(html) {
    return new Promise(function(resolve, reject) {
        resolve(html.replace(/class\=\"(.*?)\"/ig, 'className=\"$1\"'));
    });
}
export default convertClassName;