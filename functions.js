'use strict';

// drill - set 1
function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }

  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }

  if (typeof name !== 'string') {
    throw new Error('Name must be a string');
  }

  if (typeof age !== 'number') {
    throw new Error('Age must be a number');
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

// drills - set 2

function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}