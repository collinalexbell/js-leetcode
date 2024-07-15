/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    si = 0;
    ti = 0;
    
    while(si < s.length && ti < t.length) {
        if(s[si] == t[ti]) {
            si++;
        }
        ti++;
    }
    if(si == s.length) {
        return true;
    } else {
        return false;
    }
};