// https://stackoverflow.com/a/50913569
export {};
/*
If any methods are marked as abstract, then they must also be implemented in the derived class.

Methods marked as abstract in the base class, do not contain a body. The body will be implemented 
by the derived class instead.

Also note that in the following example, age has been set as a default to be -1. Setting a default 
value is optional.

So, if you want the functionality offered of an interface, i.e., the rules, but you also want your 
interface to potentially have default or optional properties and/or methods, then you can use an 
abstract class instead. Don't forget the use of super in the derived classes' constructor so that the 
default or optional properties and methods are initialized.
*/

abstract class Animal {
  abstract name: string;
  age = -1;

  constructor() {}

  abstract feed(food: string, amount: number): void;
}

class Cat extends Animal {
  name: string;
  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " + this.name + " the Cat " + amount + " kg of " + food
    );
  }
}

class Dog extends Animal {
  name: string;
  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " + this.name + " the Dog " + amount + " kg of " + food
    );
  }
}

const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
