// https://stackoverflow.com/a/50913569
export {};

const a = ["a", "b", "c", "d"];

// log the whole array
console.log(a);

// log how may items in the array
console.log(a.length);

// returns and removes the last item from the array
console.log(a.pop());

// returns and removes the first item from the array
console.log(a.shift());

// log the whole array again
console.log(a);

// add an item to the end
a.push("z");
console.log(a);

// add an item to the beginning
a.unshift("x");
console.log(a);

// remove 1 item starting at the 3rd item (0 based index)
a.splice(2, 1);
console.log(a);

// replace an item (0 based index)
a[1] = "y";
console.log(a);
