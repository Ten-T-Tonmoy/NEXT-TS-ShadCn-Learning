// module 2 maybe part 2 of mosh course

// DRY method => Dont repeat Yourself method  mind it

type Employee = {
  readonly id: number;
  name: string;
  machine?: string;
  todaydate: (date: Date) => void;
};

const employee: Employee = {
  id: 1,
  name: "Azmal",
  todaydate(date: Date) {
    console.log(`Today date is frickin ${date}`);
  },
};
employee.name = "Azmal";
employee.machine = "ibpropane";
const curDate = new Date();
employee.todaydate(curDate);
console.log(employee);

//union type basically either one
function kgtogram(weight: number | string): number {
  //narrowing union
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
  //damn thats smart auto tell me the type based on condition
  //if not used tells only common shits available
}

kgtogram(22);

//intersection number & string
//basically both at same time

type Type1 = {
  drag: () => void;
};

type Type2 = {
  drop: () => void;
};

type Both = Type1 & Type2;
const multi: Both = {
  drag: () => {},
  drop: () => {},
};

//function type
type funcTypethis = (arg1: number, arg2: string) => number;

const typeFunc: funcTypethis = (a, b) => {
  return a + parseInt(b);
};

//literal types
type Quant = 50 | 100 | 200 | 500;
const quality: Quant = 100;

console.log(multi, typeFunc(2, "22"), quality);

function greet(name: string | null | undefined) {
  if (name) {
    console.log(`Hi mr ${name}`);
  } else console.log("Hola amiga");
}
greet(undefined);

export {};
