//Unknown Type

//unknown data type is different than any
//much like the any data type, you can store any value in there without errors
let userInput: unknown;

//But when we create a new variable that takes a string and try to attatch our userInput data type to it, we get an error
//as Unknown is not guarenteed to be a string, it is just unknown at the time
let userName: string;
// userName = userInput;

//But if you were two flip these two, it would work
userInput = userName;

//if we wanted to go about assigning userName to === userInput:
if (typeof userInput === "string") {
  userName = userInput;
}
//here we are saying ONLY if userInput is a string, assign userName to be UserInput

//Never Data Type

//The Never Data Type never produces a value
//In the function below the function "never" resolves, it stops once we throw an error
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //another example of a function that would return as never is a function with an infinite loop:
  //while (true) {}
}

generateError("Internal Server Error", 500);
