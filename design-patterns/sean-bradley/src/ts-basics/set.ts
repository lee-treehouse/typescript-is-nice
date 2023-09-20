/* eslint-disable prefer-const */
// https://stackoverflow.com/a/50913569
export {};

let a: Set<number>;
a = new Set([1, 2, 3, 4]);
let b: Set<string>;
b = new Set(["a", "b", "c", "d", "a"]); // the second `a` is not added
let c: Set<unknown>;
c = new Set([1, "b", true]);

console.log(a);
console.log(b);
console.log(c);
