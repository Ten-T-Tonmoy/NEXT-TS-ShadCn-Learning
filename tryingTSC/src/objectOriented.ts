// functional programming is c
// and oop is using object

//tf js oop doesnt have private public and protected

class Student {
  private _roll: number;
  //naming conventions for private properties
  name: string;
  readonly isMale: boolean;
  sayang?: string;

  constructor(roll: number, name: string, isMale: boolean) {
    this._roll = roll;
    this.name = name;
    this.isMale = isMale;
  }
  updateRoll() {
    this._roll++;
  }
  getroll(): number {
    return this._roll;
  }
  //also private can be done to functions
}

const st1 = new Student(1, "chulbul", true);
st1.updateRoll();
console.log(st1.getroll());
//private not ddirectly accesible jus like c++
//access through getters or setters

//another way of making through constructor

class Cow {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _weight: number // no harm in following convention
  ) {}
  showWeight(): void {
    console.log(`The cows weight is ${this._weight}`);
  }
  //setter and getters
  set weight(value: number) {
    this._weight = value;
  }
  get weight(): number {
    return this._weight;
  }
}
//bbruh dont keep shits unused
const cow1 = new Cow(2, "jamal", 65);
cow1.weight = 120; //bruh weird anways setter
console.log(cow1);

//index signature property
class seatAssign {
  [seatNum: string]: string;
  //A1:string,A2:string;
}
let seats = new seatAssign();
seats.A1 = "Haolopilipala";
seats.A2 = "bigdickedElsa";
seats["A3"] = "Also legal";
//bruh its like key value pairing bt in case of objects

//-------------static keywords--------------------
//static belong to the whole class all object will share
//same static property
class Ride {
  private static _activeRides: number = 0;
  //also make it private

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
    //basically if both method call it will modify it
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
//so all statics are interconnected
console.log(Ride.activeRides); //set and get return properties?

//----------------inheritance-------------------------
//parent base or super
//child sub or derived

//abstract class cant be instanciated
//also they are made only to be extended
//jus like protected properties

abstract class Person {
  constructor(public name: string, public height: number) {}
  get fullname(): string {
    return this.name;
  }
  /**
   * protected vs private
   * protected can only be inherited unlike private
   * pretty shitty huh
   */
  protected walk() {
    console.log(`${this.name} is walking rn`);
  }

  abstract pay(): void;
  //can only exist within abstract classes
  //also all inherited class must define it
}

class Manager extends Person {
  constructor(name: string, height: number, public age: number) {
    super(name, height);
    //super calls the parent constructor
    //dont forget to put parent variable in params
  }
  //implicit override off so yea gotta use the keyword
  override get fullname() {
    return "Mr " + super.fullname + " brahmmacharya";
    //yea pretty much overriding
    //not same as overloading?
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
  constructor(name: string, height: number, public age: number) {
    super(name, height);
  }

  override get fullname() {
    return "Prof " + super.fullname + " chatarjee";
  }
  pay() {
    console.log(`Salay paid 50000`);
  }
}
class Principal extends Person {
  constructor(name: string, height: number, public age: number) {
    super(name, height);
  }

  override get fullname() {
    return "Principal " + super.fullname + " mukharjee";
  }
  pay() {
    console.log(`Salay paid 100000`);
  }
}

const stu1 = new Manager("jafa", 120, 55);
console.log(stu1.fullname);

//-------polymorphism----------------

function printNames(people: Person[]) {
  for (const p of people) console.log(p.fullname);
}
printNames([
  new Manager("kafa", 222, 66),
  new Teacher("lafa", 292, 53),
  new Principal("Balaji", 232, 88),
]);
//basically yea thats polymorphism
//open closed principle==>
//open for extension . closed for modification
stu1.giveSalary();
stu1.pay();

//interface !!!!!!!!!!!!!!!!!!! shapes

interface ICalender {
  name: string;
  //readonly roll:number;
  addevent(): void;
  removeEvent(): void;
  //only method declaration not defination
  //no interfaces,abstract,super in javascript only in ts
}
interface CloudCalender extends ICalender {
  sync(): void;
  //bruh jus like abstract class
}

class newCalender implements CloudCalender {
  //damn use ctrl+. damn
  constructor(public name: string) {}

  sync(): void {
    throw new Error("Method not implemented.");
  }

  addevent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
const firstCalender: ICalender = {
  name: "march",
  addevent() {
    console.log("event added");
  },
  removeEvent() {
    console.log("event removed");
  },
  //cant miss any properties beaware
};
//bruh like shapping with interface?
//dont have union or intersection like types

const cloudCal = new newCalender("my cloud cal");
console.log(cloudCal, firstCalender);
//can readonly,optional?,extend,like basically abstract class

interface HasName {
  name: string;
}

interface CanSpeak {
  speak(): void;
}

class Human implements HasName, CanSpeak {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} is speaking.`);
  }
}

const person = new Human("Alice");
person.speak(); // ✅ Alice is speaking.
