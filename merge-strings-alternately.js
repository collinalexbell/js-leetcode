/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let rv = "";
    while(i < word1.length || i < word2.length) {
        if(i < word1.length) {
            rv += word1[i]
        }
        if(i < word2.length) {
            rv += word2[i]
        }
        i++;
    }
    return rv;
};