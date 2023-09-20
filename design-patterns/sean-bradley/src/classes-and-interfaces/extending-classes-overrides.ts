// see notes here
// https://sbcode.net/typescript/extending_classes/

// https://stackoverflow.com/a/50913569
export {};
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        " the " +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    );
  }
}

class Cat extends Animal {
  isHungry: boolean;
  constructor(name: string, age: number, isHungry: boolean) {
    super(name, age);
    this.isHungry = isHungry;
  }

  feed(food: string, amount: number): void {
    if (this.isHungry) {
      super.feed(food, amount);
    } else {
      console.log(
        this.name + " the " + this.constructor.name + " is not hungry"
      );
    }
  }
}

class Dog extends Animal {}

const CAT = new Cat("Cosmo", 8, false);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
