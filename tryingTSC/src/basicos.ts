let b: number = 5;

function incTimes(a: number) {
  return (b = a + b);
}
console.log(incTimes(5));
console.log(incTimes(2));
console.log(incTimes(6));

const simple = () => {
  console.log("simple executed");
};

simple();
// tried debugging
//setting up json also ts config bruh

//Types
// number string boolean null undefined object NaN
//TSC=>
/**
 * any
 * unknown
 * never
 * enum
 * tuple
 */

let nums: number[] = [1, 2, 3];
let nums2 = []; //any type
nums2[0] = 1;
nums2[1] = "1";
nums.forEach((n) => n.toString);
console.log(nums);
let sles: number = 123_456_345_2; //using underscore
let done: boolean = true;

console.log(sles, done);
let user: [number, string] = [1, "lamba"];
//bruh weird nah like after 2 eles shits getting printed

// choosing each ele will make u show the different methods

//enums const better?
enum sizes {
  small = 1,
  medium = 2,
  large = 3,
}
enum test {
  first = 1,
  sec = 2,
  third = 3,
}
let mySize: sizes = sizes.medium;
//useful looking shit ngl
//unused ts stuff wont get compiled in js
let testing: test = test.third;
console.log(testing);

//functions
function calculateShit(income: number, year?: number): number {
  if (income < 50_000 && (year || 1000) < 2000) {
    return income * 1.2; //optional chaining sucks?huh
  }
  return 0;
  //ensures it doesnt auto send auto value like undefined
}
console.log(calculateShit(20000));
// always noUnusedLocals noImplicitReturns noUnsedParameters
//basically will make it like C and clean?

