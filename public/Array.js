// // ---------------- Array Basics ----------------

// // Arrays store multiple values in a single variable.
// // They are resizable and can contain mixed data types.
// // Arrays are zero-indexed (first element is index 0).
// // Array copying is shallow.
// // Note: JavaScript arrays are NOT associative arrays.

// const myArray = [0, 1, 2, 3, 4, 5];

// const myHeros = ["Batman", "Joker"];

// const myArray2 = new Array(1, 2, 3, 4);

// console.log(myArray[1]); // accessing by index


// // --------------- Array Methods ----------------

// // push() → adds item at the end
// myArray.push(6);
// myArray.push(7);
// console.log(myArray);

// // pop() → removes last item
// myArray.pop();
// console.log(myArray);

// // unshift() → adds item at the start
// myArray.unshift("unshift");
// console.log(myArray);

// // shift() → removes item from the start
// myArray.shift();
// console.log(myArray);

// // join() → converts array to string (comma separated by default)
// const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);


// const marvel_heroes = ['thor', 'ironman', 'spiderman'];
// const dc_heroes = ['superman', 'flash', 'batman'];

// // marvel_heroes.push(dc_heroes);
// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


// const allNewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNewHeroes);


const another_array = [1, 2, [3, 4], 5, [6,[7],[[8]]]];
 
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);