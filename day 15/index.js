"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}
const p = { name: "Mahmoud", age: 20 };
greet(p);
console.log("\n==================================\n");
const mathUtils_1 = require("./mathUtils");
console.log((0, mathUtils_1.multiply)(3, 4));
console.log("\n==================================\n");
function printDogDetails(dog) {
    console.log(`Name: ${dog.name}, Age: ${dog.age}, Breed: ${dog.breed}`);
}
const myDog = { name: "Buddy", age: 5, breed: "Balady" };
printDogDetails(myDog);
console.log("\n==================================\n");
function min(arr) {
    return arr.reduce((minVal, current) => {
        if (current == null)
            return minVal;
        if (minVal == null || current < minVal)
            return current;
        return minVal;
    }, undefined);
}
console.log(min([3, 1, 4, 2]));
console.log(min(["banana", "apple", "zoo"]));
