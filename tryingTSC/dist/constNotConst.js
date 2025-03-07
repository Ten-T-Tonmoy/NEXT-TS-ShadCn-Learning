"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employe = {
    id: 1,
    name: "John",
};
employe.name = "Doe";
employe.id = 2;
const nums3 = [1, 2, 3];
nums3.push(4);
nums3[0] = 99;
function modifyArray(arr) {
    arr.push(4);
}
const myArray = [1, 2, 3];
modifyArray(myArray);
class Employee {
    constructor(name) {
        this.name = name;
    }
}
const emp = new Employee("John");
emp.name = "Doe";
//# sourceMappingURL=constNotConst.js.map