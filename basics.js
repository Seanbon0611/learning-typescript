//Through static types we assign the data type that can only be accepted
//ex: if we put the argument '5' where n1 is we would get an error because we passed in a string when it only accepts a number data type
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 1;
var number2 = 5.6;
var printResult = 5;
var resultPhrase = "Result is ";
var result = add(number1, number2, printResult, resultPhrase);
