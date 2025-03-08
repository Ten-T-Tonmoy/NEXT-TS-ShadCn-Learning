//generics and decorators
// common and reuseable umm not always unioning

//T U K V

// any bt with typesafety and intellisense
// dynamic

// sequence matters and so yea
// class keyValuePair<K, T, U> {
//     constructor(public key: K, public value: T, public extra: U) {}
//   }

class keyValuePair<T, U, K> {
  constructor(public key: T, public value: U, public extra: K) {}
}

const pair = new keyValuePair<string, string, number>("1", "b", 9);
//look how T here is used as string
const pair2 = new keyValuePair<number, string, boolean>(2, "d", true);

//inside classes function keyword isnt used
//thats used for standalone functions

function wrapArray<T>(value: T) {
  return [value];
}

const nums = wrapArray<number>(1); //number array
const nums2 = wrapArray<string>("2"); //string array
const nums3: number[] = [1, 2, 3]; //normal array

// function wrapArray<T>(value: T): T[] {
//     return [value];
//   }

function makePair<T, K>(first: T, sec: K): [T, K] {
  return [first, sec];
}
const m = makePair<string, number>("2a", 5);

//generic interface
interface Result<T, E> {
  data: T | null;
  error: string | null;
  res: E | null;
}
function bring<T extends User | Product, E extends Status>(
  url: string
): Result<T, E> {
  const data: T | null = null;
  const res: E | null = null;
  return { data, error: null + url, res };
  //so basically its brand new making here
  //must match with properties of return type
  //bruh gotta return what is in interface
}

//for the  type we will be getting
interface User {
  username: string;
}
interface Status {
  code: number;
}
interface Product {
  title: string;
}
//for user type output
const det1 = bring<User, Status>("thisurl");
const det2 = bring<Product, Status>("thisurl");
//since in arg type not given so typescript wont
//explicitly chose it u gotta use <> this shit
//data will be User type and res will be Product type

//constraints generic types
/**
 * <T extends Interface>
 * <T extends string|number>
 * <T extends {name:string}>
 * <T extends Class or Person>
 */

console.log(det1, det2);
console.log(pair, pair2, nums, nums2, nums3, m);
export {};
