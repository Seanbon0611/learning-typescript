//Type Alias
//A type Alias allows the user to create a custom type that is not already built into JS
//an example of an Alias you cannot use is type Date
type Combinable = number | string;
type AsNumberOrText = "as-number" | "as-text";

//Union Types & Literal Types
function combine(
  i1: Combinable,
  i2: Combinable,
  //literal types will only allow in this example, these two string as options to pass in. anything else and it will throw an error
  resultConversion: AsNumberOrText //Liter types example
) {
  let result;
  //here we have to specify make make sure that when we're adding two values  that they are of the same data type
  //or else TS will give us an error

  if (
    (typeof i1 === "number" && typeof i2 === "number") ||
    resultConversion === "as-number"
  ) {
    //the "+" in front of the parameters takes a string and converts it to a float-point value(number)
    result = +i1 + +i2;
  } else {
    result = i1.toString() + i2.toString();
  }
  return result;
}

const compareAges = combine(40, 11, "as-number");
const combineStringAges = combine("11", "16", "as-number");
const combineNames = combine("Sean", "Dever", "as-text");
console.log(combineStringAges);
console.log(compareAges);
