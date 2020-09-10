//how TS handles objects is instead of checking key value pairs, it checks key datatype pairs
//hover over the person object for an example
//object is also a built in type

//Arrays are also inferred, hover over the hobbies attribute to see the types it's accepting
const person = {
  name: "Sean",
  age: 28,
  hobbies: ["Coding", "Working out", 5, true],
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
let favoriteWorkouts: string[];
favoriteWorkouts = ["Bench Press", "Squat", "Deadlift"];

//toUpperCase function works here because we are telling TS that we only want to accept/return string datatypes
//If we were to do console.log(hobby.map()) it wouldn't work because map returns an array
for (let workout of favoriteWorkouts) {
  console.log(workout.toUpperCase());
}

// If you want to use multiple types in an array
let otherTypes: (boolean | number | string)[];
otherTypes = [true, 22, "string"];

// console.log(person.name);
