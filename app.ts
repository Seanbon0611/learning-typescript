//Return Type
//Return Types state the the data tpye that will only be accepted from the return value
//Return types are inferred by default, hover over the function to see example
//here we have our add function from before
function add(n1: number, n2: number) {
  return n1 + n2;
}

//if you wanted to explicity declare the return type, you would follow that same pattern as when you hovered over the previous function

function subtract(n1: number, n2: number): number {
  return n1.toString() - n2;
}
//see in this example here how when we convert n1 to a string it will throw us an error, because we are declaring that we want a number to be returned

//Void

//The Void type is the opposite of the any type, where any accept all data types, void will only accept null or undefined
function alert(): void {
  alert("This is a warning message!");
}

//if we tried tried the function below, it wouldn't work
function warning(): void {
  return "This is a warning message!";
}
