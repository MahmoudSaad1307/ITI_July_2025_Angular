import { add, subtract } from "./mathUtils.js";
import { Task } from "./task.js";
import { TaskManager } from "./taskManger.js";

class Shape {
  area() {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle area:", circle.area());

const rect = new Rectangle(4, 6);
console.log("Rectangle area:", rect.area());

console.log(
  "\n================================================================================\n"
);

class BankAccount {
  constructor(accountNumber, initialBalance = 0) {
    let accNum = accountNumber;
    let balance = initialBalance;

    this.getAccountDetails = () => {
      return {
        accountNumber: accNum,
        balance: balance,
      };
    };

    this.deposit = (amount) => {
      if (amount > 0) {
        balance += amount;
      } else {
        console.log("Deposit must be positive.");
      }
    };

    this.withdraw = (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      } else {
        console.log("Invalid withdraw amount.");
      }
    };
  }
  displayBalance = () => {
    console.log(`Current Balance: ${this.getAccountDetails().balance}`);
  };
}

const acc = new BankAccount("12345", 1000);

acc.deposit(500);
acc.withdraw(200);
acc.displayBalance();

console.log(acc.getAccountDetails());

console.log(
  "\n================================================================================\n"
);

class Employee {
  #salary;

  constructor(initialSalary = 0) {
    this.#salary = initialSalary;
  }

  setSalary(amount) {
    if (amount > 0) {
      this.#salary = amount;
    } else {
      console.log("Salary must be positive.");
    }
  }

  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee();
emp.setSalary(5000);
console.log("Salary:", emp.getSalary());

console.log(
  "\n================================================================================\n"
);

class Product {
  #name;
  #quantity;
  #price;

  constructor(name, quantity, price) {
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
  }

  addStock(quantity) {
    if (quantity > 0) this.#quantity += quantity;
  }

  sell(quantity) {
    if (quantity > 0 && quantity <= this.#quantity) {
      this.#quantity -= quantity;
    } else {
      console.log("Not enough stock.");
    }
  }

  getDetails() {
    return {
      name: this.#name,
      price: this.#price,
      quantity: this.#quantity,
    };
  }
}

const product = new Product("Phone", 10, 300);
product.addStock(5);
product.sell(3);
console.log(product.getDetails());

console.log(
  "\n================================================================================\n"
);

console.log("Add(10, 5):", add(10, 5));
console.log("Subtract(10, 5):", subtract(10, 5));

console.log(
  "\n================================================================================\n"
);

const manager = new TaskManager();
const task1 = new Task(1, "Study JavaScript");
const task2 = new Task(2, "Practice Coding");

manager.addTask(task1);
manager.addTask(task2);
task1.markCompleted();

console.log("Tasks before removing completed:", manager.listTasks());
manager.removeCompleted();
console.log("Tasks after removing completed:", manager.listTasks());
