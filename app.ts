//Union Types & Literal Types
function combine(
  i1: number | string,
  i2: number | string,
  //literal types will only allow in this example, these two string as options to pass in. anything else and it will throw an error
  resultConversion: "as-number" | "as-text" //Liter types example
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
