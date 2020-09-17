"use strict";
//how TS handles objects is instead of checking key value pairs, it checks key datatype pairs
//hover over the person object for an example
//object is also a built in type
//Arrays are also inferred, hover over the hobbies attribute to see the types it's accepting
var person = {
    name: "Sean",
    age: 28,
    hobbies: ["Coding", "Working out", 5, true],
    role: [2, "author"],
};
console.log(person.name);
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
//toUpperCase function works here because we are telling TS that we only want to accept/return string datatypes
//If we were to do console.log(hobby.map()) it wouldn't work because map returns an array
for (var _i = 0, favoriteWorkouts_1 = favoriteWorkouts; _i < favoriteWorkouts_1.length; _i++) {
    var workout = favoriteWorkouts_1[_i];
    console.log(workout.toUpperCase());
}
// If you want to use multiple types in an array
var otherTypes;
otherTypes = [true, 22, "string"];
//Tuple Datatype
//A Tuple datatype is a fixed-length array/fixed-type array
//A Tuple has exactly two elements because a user can only have one role a is made up of two elements
var user = {
    username: "Sean",
    role: [2, "admin"],
};
//push is an exception for tuples, even though we're declaring the length of the tuple
//the below code works:
user.role.push("user");
//but if were to hard code it user.role = [2, "admin", "other"] it would give us an error
//Enum Datatype
// Enum Datatype allows us to to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
//ex: enum { NEW, OLD }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // Note* Enums do not have to be uppercase, it is just convention, it will still work with lowecase
//If you don't want to start at a value of 0 and say want to start with the number 5
/*
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
*/
var newUser = {
    name: "Sean",
    age: 28,
    hobbies: ["Coding", "Fitness", "Cooking"],
    role: Role.ADMIN,
};
if (newUser.role === Role.ADMIN) {
    console.log("is admin");
}
//In this case what enums is doing is assigning labels to numbers
//run tsc app.ts and you will see what the compled JS code looks like
