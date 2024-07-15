/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let outputLength = 0;
    let curGroup = "";
    let groupCount = 0;

    for(let i = 0; i < chars.length; i++) {
        if(chars[i] == curGroup) {
            groupCount++
        } else {
            if(groupCount > 0) {
                chars[outputLength++] = curGroup;
                if(groupCount > 1) {
                    for(let c of groupCount.toString()) {
                        chars[outputLength++] = c;
                    }
                }
            }
            curGroup = chars[i];
            groupCount = 1
        }
    }
    if(groupCount > 0) {
        chars[outputLength++] = curGroup;
        if(groupCount > 1) {
            for (let c of groupCount.toString()) {
                chars[outputLength++] = c;
            }
        }
    }
    return outputLength;
};