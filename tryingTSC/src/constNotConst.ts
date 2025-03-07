const employe = {
  id: 1,
  name: "John",
};

employe.name = "Doe"; // ✅ Allowed
employe.id = 2; // ✅ Allowed

// employee = { id: 3, name: "Alice" };

// ❌ ERROR: Assignment to constant variable

const nums3 = [1, 2, 3];
// bruh nums not allowd on ts nande
nums3.push(4); // ✅ Allowed: Modifying contents
nums3[0] = 99; // ✅ Allowed: Modifying contents
// nums3 = [1, 2]; // ❌ ERROR: Cannot reassign the array itself

function modifyArray(arr: number[]) {
  arr.push(4); // ✅ Allowed: Modify contents
  //   arr = [1, 2]; // ❌ ERROR: Cannot reassign the array
}

const myArray = [1, 2, 3];
modifyArray(myArray);

//Classes being not Const

class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const emp = new Employee("John");

emp.name = "Doe"; // ✅ Allowed: Modify the properties
//   emp = new Employee("Alice"); // ❌ ERROR: Cannot reassign the class instance

// destructing into const will make it un reassignable

// const { name } = { name: "Alice", age: 25 };
//   name = "Bob";  // ❌ ERROR: Cannot reassign the destructured variable

// const [first] = [1, 2, 3];
// first = 100;  // ❌ ERROR: Cannot reassign the destructured variable

export {};
