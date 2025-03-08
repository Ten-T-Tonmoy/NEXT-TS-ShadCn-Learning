"use strict";
var _a;
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
        return 50;
    }
    else {
        console.log("Hola amiga");
        return null;
    }
}
function sayUp(price) {
    return price === 25 ? null : { price: 50 };
}
const kurt = sayUp(30);
console.log(((_a = kurt === null || kurt === void 0 ? void 0 : kurt.price) === null || _a === void 0 ? void 0 : _a.toString()) + "22");
greet(undefined);
const Speed = null;
const ride = {
    Speed: Speed !== null ? Speed : 30,
    Harsh: Speed !== null && Speed !== void 0 ? Speed : 50,
};
console.log(ride);
//# sourceMappingURL=advanceTypes.js.map