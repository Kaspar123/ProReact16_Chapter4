/** Define functions */
const myFunc1 = function() {
    console.log('myFunc1');
};

function myFunc2() {
    console.log('myFunc2');
};

const myFunc3 = () => console.log('myFunc3');

myFunc1();
myFunc2();
myFunc3();


/** Default parameter */
function myFunc(name, weather = "raining") {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}

myFunc("Kaspar");
myFunc("Kaspar", "sunny");


/** Rest parameters */
function myFuncRestParameters(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    extraArgs.forEach((value, _) => console.log(value));
}

myFuncRestParameters("Kaspar", "Cloudy", "one", "two", "three", "four");


/** Function inside another function */
function myFuncInFunc(name) {
    let myLocalVar = "sunny";
    let innerFunction = function() {
        return ("Hello " + name + ", today is " + myLocalVar + ".");
    }
    return innerFunction();
}

console.log(myFuncInFunc("Kaspar"));
