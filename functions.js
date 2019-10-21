'use strict';

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }

  const yearOfBirth = getYearOfBirth(age);
  
  return `Hi my name is ${name} and I am ${age} years old and I was born in ${yearOfBirth}`;
}

try {
  const greeting = createGreeting('Garrett', 33);
  console.log(greeting);
} catch (e) {
  console.log(e.message);
}