'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `Hi my name is ${name} and I am ${age} years old and I was born in ${yearOfBirth}`;
}

const greeting = createGreeting('Garrett', 33);
console.log(greeting);