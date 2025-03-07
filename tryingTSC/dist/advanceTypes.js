"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    id: 1,
    name: "Azmal",
    todaydate(date) {
        console.log(`Today date is frickin ${date}`);
    },
};
employee.name = "Azmal";
employee.machine = "ibpropane";
const curDate = new Date();
employee.todaydate(curDate);
console.log(employee);
function kgtogram(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgtogram(22);
const multi = {
    drag: () => { },
    drop: () => { },
};
const typeFunc = (a, b) => {
    return a + parseInt(b);
};
const quality = 100;
console.log(multi, typeFunc(2, "22"), quality);
function greet(name) {
    if (name) {
        console.log(`Hi mr ${name}`);
    }
    else
        console.log("Hola amiga");
}
greet(undefined);
//# sourceMappingURL=advanceTypes.js.map