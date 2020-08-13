const myArray = [1, 4, 5, 6, 3, 2, 7];
const myObj = [{ id: 1 }, { id: 2 }, { id: 3 }];
// map creates new arrays based on existing arrays
console.log(myArray.map((el) => el + 1));
console.log(myArray.map(() => 'b'));

// filter takes a function that gets iterated and returns a new array
// whatever returns true is returned in the new array
console.log(myArray.filter((el) => el > 4));

// reduce method does 2 things: end up with 1 final value,
// and persist outcome of iterating over elements in each subsequent interation
console.log(
  'reduce method',
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0 //can be any starting currentElement
  )
);

// find element that returns first item matching condition we present
console.log(
  'find method',
  myArray.find((el) => el === 5)
);
console.log(
  'find method',
  myArray.find((el) => el > 2)
);
console.log(
  'find method',
  myObj.find((el) => el.id == 1)
);

// includes is a method that takes an arg and see if it exists in our array
// can take in args of value and then index where to start from
// checks if reference is equal to any items with same ref in memory
console.log(myArray.includes(3, 5));

//primitive types: string, boolean, null, undefined, number, symbol
//var a = 3  creates new var called a and pointing to 3 in memory
// var b = 3 creates new var called a and pointing to 3 in memory
// var c = b points to b

//object: anything that is not a primitive type
// when instantiated, it gets it's own referece in memory
const obj1 = { id: 1 };
const obj2 = { id: 1 };
console.log(obj1 == obj2);
// obj2 and obj1 will not be equal so it will return false
const obj3 = obj2;
console.log(obj3 == obj2); // returns true since pointing to same spot in memory
