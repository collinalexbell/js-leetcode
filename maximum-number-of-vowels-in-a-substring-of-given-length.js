/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let sum = 0;
    let max = 0;
    for(let ki = 0; ki < Math.min(k, s.length); ki++) {
        if(vowels.has(s[ki])){
            sum++;
        }
    }
    max = Math.max(max, sum);
    for(let start = 1; start + k <= s.length; start++) {
        if(vowels.has(s[start-1])) {
            sum -= 1;
        }
        if(vowels.has(s[start+k-1])) {
            sum += 1;
        }
        max = Math.max(max, sum)
    }
    return max;
};