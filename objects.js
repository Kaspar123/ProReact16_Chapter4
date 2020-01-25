/** Working with objects */
let myData1 = new Object();
myData1.name = "Kaspar";
myData1.weather = "sunny";

console.log(myData1);


/** Using object literals */
let myData2 = {
    name: "Kaspar",
    weather: "cloudy"
};

console.log(myData2);


/** Using function as methods */
let myData3 = {
    ...myData2,
    printMessages: () => {
        console.log(myData3.name);
        console.log(myData3.weather);
    }
};

myData3.printMessages();


/** Using classes */
class myData4 {

    constructor() {
        this.name = "Kaspar";
        this.weather = "sunny";
    }

    printMessages() {
        console.log(this.name);
        console.log(this.weather);
    }
}
let myData5 = new myData4();
myData5.printMessages();


/** copy properties from one object to another */
let secondObject = {};
Object.assign(secondObject, myData5);

console.log(secondObject);


/** copy using spread */
let copyObject = { ...myData5, weather: "cloudy", age: 23 };

console.log(copyObject);