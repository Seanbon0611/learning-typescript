//Through static types we assign the data type that can only be accepted
//ex: if we put the argument '5' where n1 is we would get an error because we passed in a string when it only accepts a number data type
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

//In the example above we are using examples of each one of the basic data types and their use case

const number1 = 1;
const number2 = 5.6;

const printResult = true;

const resultPhrase = "Result is ";
const result = add(number1, number2, printResult, resultPhrase);
