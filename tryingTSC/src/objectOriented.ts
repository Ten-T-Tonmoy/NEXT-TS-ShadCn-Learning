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

class Person {
  constructor(public name: string, public height: number) {}
  get fullname(): string {
    return this.name;
  }
  walk() {
    console.log(`${this.name} is walking rn`);
  }
}

class Manager extends Person {
  constructor(name: string, height: number, public age: number) {
    super(name, height);
    //super calls the parent constructor
    //dont forget to put parent variable in params
  }
}

const stu1 = new Manager("jafa", 120, 55);
console.log(stu1);
