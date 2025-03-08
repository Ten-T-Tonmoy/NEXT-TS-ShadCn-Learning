class Student {
    constructor(roll, name, isMale) {
        this._roll = roll;
        this.name = name;
        this.isMale = isMale;
    }
    updateRoll() {
        this._roll++;
    }
    getroll() {
        return this._roll;
    }
}
const st1 = new Student(1, "chulbul", true);
st1.updateRoll();
console.log(st1.getroll());
class Cow {
    constructor(id, owner, _weight) {
        this.id = id;
        this.owner = owner;
        this._weight = _weight;
    }
    showWeight() {
        console.log(`The cows weight is ${this._weight}`);
    }
    set weight(value) {
        this._weight = value;
    }
    get weight() {
        return this._weight;
    }
}
const cow1 = new Cow(2, "jamal", 65);
cow1.weight = 120;
console.log(cow1);
class seatAssign {
}
let seats = new seatAssign();
seats.A1 = "Haolopilipala";
seats.A2 = "bigdickedElsa";
seats["A3"] = "Also legal";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    get fullname() {
        return this.name;
    }
    walk() {
        console.log(`${this.name} is walking rn`);
    }
}
class Manager extends Person {
    constructor(name, height, age) {
        super(name, height);
        this.age = age;
    }
    get fullname() {
        return "Mr " + super.fullname + " brahmmacharya";
    }
    giveSalary() {
        this.walk();
        console.log("Salary given ");
    }
    pay() {
        console.log(`Salay paid 25000`);
    }
}
class Teacher extends Person {
    constructor(name, height, age) {
        super(name, height);
        this.age = age;
    }
    get fullname() {
        return "Prof " + super.fullname + " chatarjee";
    }
    pay() {
        console.log(`Salay paid 50000`);
    }
}
class Principal extends Person {
    constructor(name, height, age) {
        super(name, height);
        this.age = age;
    }
    get fullname() {
        return "Principal " + super.fullname + " mukharjee";
    }
    pay() {
        console.log(`Salay paid 100000`);
    }
}
const stu1 = new Manager("jafa", 120, 55);
console.log(stu1.fullname);
function printNames(people) {
    for (const p of people)
        console.log(p.fullname);
}
printNames([
    new Manager("kafa", 222, 66),
    new Teacher("lafa", 292, 53),
    new Principal("Balaji", 232, 88),
]);
stu1.giveSalary();
stu1.pay();
class newCalender {
    constructor(name) {
        this.name = name;
    }
    sync() {
        throw new Error("Method not implemented.");
    }
    addevent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
const firstCalender = {
    name: "march",
    addevent() {
        console.log("event added");
    },
    removeEvent() {
        console.log("event removed");
    },
};
const cloudCal = new newCalender("my cloud cal");
console.log(cloudCal, firstCalender);
class Human {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is speaking.`);
    }
}
const person = new Human("Alice");
person.speak();
//# sourceMappingURL=objectOriented.js.map