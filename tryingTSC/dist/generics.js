"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class keyValuePair {
    constructor(key, value, extra) {
        this.key = key;
        this.value = value;
        this.extra = extra;
    }
}
const pair = new keyValuePair("1", "b", 9);
const pair2 = new keyValuePair(2, "d", true);
function wrapArray(value) {
    return [value];
}
const nums = wrapArray(1);
const nums2 = wrapArray("2");
const nums3 = [1, 2, 3];
function makePair(first, sec) {
    return [first, sec];
}
const m = makePair("2a", 5);
function bring(url) {
    const data = null;
    const res = null;
    return { data, error: null + url, res };
}
const det1 = bring("thisurl");
const det2 = bring("thisurl");
console.log(det1, det2);
console.log(pair, pair2, nums, nums2, nums3, m);
//# sourceMappingURL=generics.js.map