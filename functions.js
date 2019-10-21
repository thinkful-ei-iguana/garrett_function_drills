'use strict';

function createGreeting(name, age) {
  return `Hi my name is ${name} and I am ${age} years old`;
}

const greeting = createGreeting('Garrett', 33);
console.log(greeting);