const call = document.getElementById("phone");
console.log(call.value);
class Door {
    constructor(oculus, price) {
        this.oculus = oculus;
        this.price = price;
    }
}
function sayType(document) {
    if (typeof document === "string") {
        console.log("This shits a string");
    }
    else if (document instanceof Door) {
        console.log("This shits a unknown");
    }
}
console.log(sayType);
//# sourceMappingURL=typeAssertDOM.js.map