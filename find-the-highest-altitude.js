/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;   
    let max = 0;

    for(let g of gain) {
        alt += g;
        max = Math.max(max, alt);
    }
    return max;
};