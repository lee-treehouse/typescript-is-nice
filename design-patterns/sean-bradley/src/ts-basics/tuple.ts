/* eslint-disable prefer-const */
/*

The Tuple is similar to an array, but you are explicitly indicating how many items are in the 
Tuple and of which type they are when you instantiate it. The Tuple type is not directly supported 
in JavaScript as a Tuple, but as an array instead. The rules of the Tuple are enforced in TypeScript 
only when it is created. After the Tuple is created, it behaves the same as an array. 
You can add/remove/edit items.

*/

// https://stackoverflow.com/a/50913569
export {};

let a: [number, string];
a = [1, "abc"];
let b: [string, boolean, number];
b = ["abc", false, 123];

console.log(a[1]);
console.log(b[2]);
