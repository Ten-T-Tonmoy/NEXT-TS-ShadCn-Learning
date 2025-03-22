const call = document.getElementById("phone") as HTMLInputElement;
//Html element
//its htmlinput element
//so if we tell its that so compiler will help

console.log(call.value);
//ez to access things i can do with that

//incase we not sure bout input use unknown over any
class Door {
  oculus: string;
  price: number;
  constructor(oculus: string, price: number) {
    this.oculus = oculus;
    this.price = price;
  }
}
function sayType(document: unknown) {
  //do maths or whatever using narrowing
  if (typeof document === "string") {
    console.log("This shits a string");
  } else if (document instanceof Door) {
    console.log("This shits a unknown");
  }
}
// instanceof is used when its custom type

// never type useless basically never executes

console.log(sayType);
