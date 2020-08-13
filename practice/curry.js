//currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years later....
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy5(4));
