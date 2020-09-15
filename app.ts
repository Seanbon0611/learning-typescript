//Union Types
function combine(i1: number | string, i2: number | string) {
  let result;
  if (typeof i1 === "number" && typeof i2 === "number") {
    result = i1 + i2;
  } else {
    result = i1.toString() + i2.toString();
  }
  return result;
}

const compareAges = combine("Sean", "Dever");

console.log(compareAges);
