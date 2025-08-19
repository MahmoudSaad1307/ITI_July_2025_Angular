const numbers = [10, 20, 30];
const newNumbers = [0, ...numbers, 100];
console.log(newNumbers);

console.log(
  "\n================================================================================\n"
);

const details = { name: "Bob", age: 30 };
const newDetails = { ...details, country: "USA" };
console.log(newDetails);

console.log(
  "\n================================================================================\n"
);

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" }));

console.log(getUserData({ firstName: "Melissa" }));

console.log(getUserData({}));
console.log(
  "\n================================================================================\n"
);

function calculateAverage(...nums) {
  const total = nums.reduce((sum, val) => sum + val);
  return nums.length === 0 ? 0 : total / nums.length;
}

console.log(calculateAverage(10, 20, 30));

console.log(
  "\n================================================================================\n"
);

function findMax(...args) {
  return Math.max(...args);
}

console.log(findMax(5, 10, 15, 20));

console.log(
  "\n================================================================================\n"
);

const numbersList = [1, 2, 3, 4, 5];
const squared = numbersList.map((n) => n * n);
console.log(squared);

console.log(
  "\n================================================================================\n"
);

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };

console.log(updatedPerson);

console.log(
  "\n================================================================================\n"
);

const words = ["apple", "banana", "cherry", "date", "fig"];
const hasLongWord = words.some((word) => word.length > 5);
console.log(hasLongWord);

console.log(
  "\n================================================================================\n"
);

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 45 },
  { name: "David", score: 60 },
  { name: "Eve", score: 100 },
];

const passingStudents = students
  .filter((student) => student.score >= 60)
  .map((student) => student.name);
console.log(passingStudents);

const allAbove50 = students.every((student) => student.score > 50);
console.log(allAbove50);

const hasPerfectScore = students.some((student) => student.score === 100);
console.log(hasPerfectScore);

console.log(
  "\n================================================================================\n"
);

var str = "hello";
const chars = [...str];
console.log(chars);

console.log(
  "\n================================================================================\n"
);
