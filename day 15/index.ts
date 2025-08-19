interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}
const p: Person = { name: "Mahmoud", age: 20 };
greet(p);
console.log("\n==================================\n");


import { multiply } from './mathUtils';

console.log(multiply(3, 4));
console.log("\n==================================\n");

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

function printDogDetails(dog: Dog): void {
  console.log(`Name: ${dog.name}, Age: ${dog.age}, Breed: ${dog.breed}`);
}
const myDog: Dog = { name: "Buddy", age: 5, breed: "Balady" };
printDogDetails(myDog);

console.log("\n==================================\n");
function min<T>(arr: (T | null | undefined)[]): T | undefined | null {
  return arr.reduce((minVal, current) => {
    if (current == null) return minVal;
    if (minVal == null || current < minVal) return current;
    return minVal;
  }, undefined);
}

console.log(min([3, 1, 4, 2]));

console.log(min(["banana", "apple", "zoo"]));

