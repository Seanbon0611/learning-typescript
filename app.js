//how TS handles objects is instead of checking key value pairs, it checks key datatype pairs
//hover over the person object for an example
//object is also a built in type
//Arrays are also inferred, hover over the hobbies attribute to see the types it's accepting
var person = {
    name: "Sean",
    age: 28,
    hobbies: ["Coding", "Working out", 5, true]
};
//This commented out portion is the declarative way of assigning object types but is not optimal as it can be inferred
/*
  const person: {
    name: string;
    age:string
  } = {
      name: "Sean",
      age: 28,
    };
*/
//you can also declare array types. example in the line below
var favoriteWorkouts;
favoriteWorkouts = ["Bench Press", "Squat", "Deadlift"];
for (var _i = 0, favoriteWorkouts_1 = favoriteWorkouts; _i < favoriteWorkouts_1.length; _i++) {
    var workout = favoriteWorkouts_1[_i];
    console.log(workout);
}
//If you want to use multiple types in an array
// let otherTypes: boolean|number|string[];
// otherTypes = [true, 22, "string"];
// console.log(person.name);
