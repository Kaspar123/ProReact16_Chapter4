/** working with arrays */
let myArray1 = new Array();
myArray1[0] = 1996;
myArray1[1] = "Kaspar";
myArray1[2] = true;

console.log(myArray1);


/** using array literal */
let myArray2 = [1996, "Kaspar", true];

console.log(myArray2);


/** enumerating the contents of an Array */
myArray2.forEach((value, index) => console.log(`Index ${index}: ${value}`));


/** using spread operator */
function printItems(numValue, stringValue, boolValue) {
    console.log(`${numValue} ${stringValue} ${boolValue}`);
}

printItems(...myArray2);


/** concatenating arrays */
let myOtherArray = [1996, "Kaarel", false, ...myArray2]

console.log(myOtherArray);


/** Processing an array */
let products = [
    { name: "Name1", price: 12.90, stock: 30 },
    { name: "Name2", price: 4.68, stock: 5 },
    { name: "Name3", price: 8.90, stock: 0 },
    { name: "Name4", price: 1.00, stock: 8 }
]

let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((acc, item) => acc + item.price * item.stock, 0);

console.log(totalValue);