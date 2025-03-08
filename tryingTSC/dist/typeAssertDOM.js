const call = document.getElementById("phone");
console.log(call.value);
class door {
    constructor(oculus, price) {
        this.oculus = oculus;
        this.price = price;
    }
}
function sayType(document) {
    if (typeof document === "string") {
        console.log("This shits a string");
    }
    else if (document instanceof door) {
        console.log("This shits a unknown");
    }
}
//# sourceMappingURL=typeAssertDOM.js.map