// https://stackoverflow.com/a/50913569
export {};
/*
Abstract classes are like a mixture of implementing interfaces and extending a class in one step. 
You can create a class with optional methods and properties, but also indicate which methods and 
properties must be implemented in the derived class. Note that your base class, despite enforcing
 abstract rules, is still able to itself implement any interfaces you desire.

Use the abstract keyword to indicate a class contains abstract methods or properties.
*/

/*
In this first example, the abstract class Animal has an abstract property name. 
Cat and Dog must implement the property name themselves rather than inherit from the base class.

Note that the abstract name in the Animal class definition cannot be initialized a value in either 
the class attribute definition or in its constructor. It is now a rule indicating that name must 
be initialized by the derived class instead.
*/

abstract class Animal {
  abstract name: string;
  age: number;

  constructor(age: number) {
    // this.name = name // this must now be assigned in the derived class instead
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
  name: string;
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }
}

class Dog extends Animal {
  name: string;
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }
}

const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
