"use strict";
let b = 5;
function incTimes(a) {
    return (b = a + b);
}
console.log(incTimes(5));
console.log(incTimes(2));
console.log(incTimes(6));
const simple = () => {
    console.log("simple executed");
};
simple();
let nums = [1, 2, 3];
let nums2 = [];
nums2[0] = 1;
nums2[1] = "1";
nums.forEach((n) => n.toString);
console.log(nums);
let sles = 1234563452;
let done = true;
console.log(sles, done);
let user = [1, "lamba"];
var sizes;
(function (sizes) {
    sizes[sizes["small"] = 1] = "small";
    sizes[sizes["medium"] = 2] = "medium";
    sizes[sizes["large"] = 3] = "large";
})(sizes || (sizes = {}));
var test;
(function (test) {
    test[test["first"] = 1] = "first";
    test[test["sec"] = 2] = "sec";
    test[test["third"] = 3] = "third";
})(test || (test = {}));
let mySize = sizes.medium;
let testing = test.third;
console.log(testing);
//# sourceMappingURL=basicos.js.map