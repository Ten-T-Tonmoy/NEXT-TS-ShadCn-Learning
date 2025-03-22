"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door {
    constructor(nm, pc) {
        this.name = nm;
        this.price = pc;
    }
}
const shinyDoor = new Door("zabba", 122);
console.log(shinyDoor);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction[Direction["Left"] = 3] = "Left";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[2]);
//# sourceMappingURL=tsAdvance.js.map