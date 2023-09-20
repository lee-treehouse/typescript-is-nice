const a: Set<string> = new Set();
// adding items
a.add("cat");
a.add("dog");
a.add("bird");
console.log(a);

// remove an item
a.delete("dog");
console.log(a);

// Retrieve an individual item.
console.log(Array.from(a)[1]);

// The great thin about a set compared to an array, is that all
// items are guaranteed to be unique. No duplicates allowed.
a.add("bird");
a.add("bird");
console.log(a);

// Get the length of the Set
console.log(a.size);

// Check if a Set has a value
console.log(a.has("cat"));
