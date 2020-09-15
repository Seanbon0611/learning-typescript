//Union Types
function combine(i1, i2, resultConversion) {
    var result;
    //here we have to specify make make sure that when we're adding two values  that they are of the same data type
    //or else TS will give us an error
    if ((typeof i1 === "number" && typeof i2 === "number") ||
        resultConversion === "as-number") {
        //the "+" in front of the parameters takes a string and converts it to a float-point value(number)
        result = +i1 + +i2;
    }
    else {
        result = i1.toString() + i2.toString();
    }
    return result;
}
var compareAges = combine(40, 11, "as-number");
var combineStringAges = combine("11", "16", "as-number");
var combineNames = combine("Sean", "Dever", "as-text");
console.log(combineStringAges);
console.log(compareAges);
