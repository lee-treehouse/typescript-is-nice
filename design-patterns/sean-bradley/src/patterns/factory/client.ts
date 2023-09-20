import { ChairFactory } from "./chair-factory";

console.log("I need to get two chairs");
console.log("");

const chair = ChairFactory.getChair();
console.log(chair.getDimensions());

console.log("");

const chair2 = ChairFactory.getChair("BIG");
console.log(chair2.getDimensions());
