//Return Type
//Return Types state the the data tpye that will only be accepted from the return value
//Return types are inferred by default, hover over the function to see example
//here we have our add function from before
function add(n1: number, n2: number) {
  return n1 + n2;
}

//if you wanted to explicity declare the return type, you would follow that same pattern as when you hovered over the previous function

// function subtract(n1: number, n2: number): number {
//   return n1.toString() - n2;
// }
//see in this example here how when we convert n1 to a string it will throw us an error, because we are declaring that we want a number to be returned

//Void

//The Void type is the opposite of the any type, where any accept all data types, void will only accept null or undefined
function alert(): void {
  alert("This is a warning message!");
}

//if we tried tried the function below, it wouldn't work
// function warning(): void {
//   return "This is a warning message!";
// }

//Function Types

//This data type tells typescript that the only thing that can be stored within this variable is a function
let combineValues: Function;

//shows an error because the value we can assign it must be a function
// combineValues = 5;

combineValues = add;

//now the above works, but say we reassign to a different function we get undefined
function sayhi(name) {
  return "Hello!";
}

combineValues = sayhi;
console.log(combineValues(5, 5));

//so the way we can make function types more specific is like the example below

let combineValues2: (a: number, b: number) => number;
//Here we are telling TS that combineValues2 can only store a function, and that it may only hold numbers as it's arguments and that it will also return a number

//see how if we try to assign the sayhi function again, we get an error
// combineValues2 = sayhi;

//Callback Functions

//here say we were have a callback function as a parameter and that a number must be passed in as an argument and that it will return a void data type
function addAndHandle(n1: number, n2: number, callBack: (a: number) => void) {
  const result = n1 + n2;
  callBack(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  //notice how even though we are return result(which is a number) we are not getting an error even though it is to return a void data type
  //What void is doing here it is ignoring any result you might be returning
  return result;
});
