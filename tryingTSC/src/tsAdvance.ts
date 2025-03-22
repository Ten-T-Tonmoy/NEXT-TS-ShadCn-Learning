// Decorators dont need unless angular,vue,nest.js

// import { Door } from "./typeAssertDOM";
// import knut, { knut2 } from "./integrating.js";
//ctrl+. helps to import //,default,{normalExp}
// import * as Shapes... wildCard import
//shapes.Door thus we can access shits

// export {circle,square};

// import {Circle as Mine} from './shapes'
//also move to a new file helps
//instantiating with constructor
class Door {
  name: string;
  price: number;
  constructor(nm: string, pc: number) {
    this.name = nm;
    this.price = pc;
  }
}
const shinyDoor = new Door("zabba", 122);
console.log(shinyDoor);

//now pure js libraries
//use definitely type for such cases lodas....

//c++ only lets u acccess value with keys
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = 3,
  Right = "RIGHT",
}

console.log(Direction.Up);
console.log(Direction[2]);

export {};
//dont forget how this shit always slaps