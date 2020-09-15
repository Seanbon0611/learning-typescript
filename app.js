function combine(i1, i2) {
    var result;
    if (typeof i1 === "number" && typeof i2 === "number") {
        result = i1 + i2;
    }
    else {
        result = i1.toString() + i2.toString();
    }
    return result;
}
var compareAges = combine("Sean", "Dever");
console.log(compareAges);
