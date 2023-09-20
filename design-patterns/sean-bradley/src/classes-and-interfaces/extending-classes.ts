// https://stackoverflow.com/a/50913569
export {};

/*

You can extend any existing class templates by using the extends keyword. The new class definition will 
be made up of the original class, but can optionally include its own new bespoke constructor, 
properties and/or methods. The new class definition is known as the derived class or subclass.

Extending a class is a different concept than implementing an interface. An Interface describes 
the property types and method signature rules that the class implementing it should comply with. 
Extending a class copies the base class template and allows you to refine or specialize it further.

With the derived class, the original class being extended is called the base or super class. 
It is a class that may have methods and properties that are common, but another class can be 
created from it that extends from this base/super class and has the option to override the constructor, 
methods and properties. The derived class also has the option to create additional methods and properties 
specific for its own needs. If the base class is using an interface, then any derived class will already 
comply provided that the base class was already correctly complying with its chosen interface.

*/
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

class Cat extends Animal {}

class Dog extends Animal {}

const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);

/* Also take note of the usage of this.constructor.name in the feed method in the above example. 
Since the CAT and DOG objects are instantiated from their own new Cat and Dog classes, rather than 
the Animal class directly, their constructor name is either CAT or DOG. For a test, you could 
instantiate the Dog from the Animal class directly and see the difference in the printed output.*/
