// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const hello1 = "Hello World!"

function rHello () {
	return hello1;
}
console.log(rHello())
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  
  return function() {
    count = count + 1;
    return count;
  }
}
const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let count = 0;
const increment = () => {
  
  return function() {
    count = count + 1;
    return count;
  }
}
const decrement = () => {
	return function() {
		count = count - 1;
		return count;
	}
}
const invokeIncrement = increment();
const invokeDecrement = decrement();
console.log(invokeIncrement())
console.log(invokeIncrement())
console.log(invokeIncrement())
console.log(invokeDecrement())
console.log(invokeDecrement())
console.log(invokeDecrement())
console.log(invokeDecrement())


// a quick change
