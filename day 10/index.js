function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
console.log("--- Range 1 to 5 ---");
for (const n of range(1, 5)) console.log(n);

function commonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const item of set1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log("--- Common Elements ---");
console.log(commonElements([1, 2, 3, 2], [2, 3, 4]));

function* fibonacci(max) {
  let a = 0,
    b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log("--- Fibonacci up to 20 ---");
for (const n of fibonacci(20)) console.log(n);

const iterableObject = {
  data: {
    name: "Mahmoud Saad",
    age: 20,
  },

  [Symbol.iterator]: function* () {
    for (const key in this.data) {
      yield [key, this.data[key]];
    }
  },
};

for (const [key, value] of iterableObject) {
  console.log(`${key}: ${value}`);
}

function* evenNumbers(max) {
  for (let i = 0; i <= max; i += 2) {
    yield i;
  }
}

function* oddNumbers(max) {
  for (let i = 1; i <= max; i += 2) {
    yield i;
  }
}

function* combinedOddEven(max) {
  yield* oddNumbers(max);
  yield* evenNumbers(max);
}
console.log("--- Combined Odd & Even up to 6 ---");
for (const n of combinedOddEven(6)) console.log(n);

function* letterGenerator() {
  yield* ["A", "B", "C"];
}

function* numberGenerator() {
  yield* [1, 2, 3];
}

function* combinedLettersAndNumbers() {
  yield* letterGenerator();
  yield* numberGenerator();
}
console.log("--- Letters & Numbers ---");
for (const val of combinedLettersAndNumbers()) console.log(val);
