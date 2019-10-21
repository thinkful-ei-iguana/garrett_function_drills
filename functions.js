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

jediName('Beyonce', 'Knowles');

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log(`And beyond`);
  } else if (isFinite(num) && num > 0) {
    console.log(`To infinity`);
  } else if(isFinite(num) && num < 0) {
    console.log(`To negative infinity`);
  } else {
    console.log(`Staying home`);
  }
}

beyond(5);
beyond(0);
beyond(6/0);

function decode(word) {
  if (word[0] === 'a') {
    return word[1];
  } else if (word[0] === 'b') {
    return word[2];
  } else if (word[0] === 'c') {
    return word[3];
  } else if (word[0] === 'd') {
    return word[4];
  } else {
    return ' ';
  }
}

decode();


function getDaysInMonth(month, leapYear) {
  switch(month) {
  case 'january':
    return `January has 31 days`;
    break;
  
  case 'february':
    if (leapYear) {
      return `February has 29 days`;
    } else {
      return `February has 28 days`;
    }
    break;

  case 'march':
    return `March has 31 days`;
    break;
    
  case 'april':
    return `April has 30 days`;
    break;
        
  case 'may':
    return `May has 31 days`;
    break; 
    
  case 'june':
    return `June has 30 days`;
    break;
    
  case 'july':
    return 'July has 31 days';
    break;
    
  case 'august':
    return 'August has 31 days';
    break;
    
  case 'september':
    return `September has 30 days`;
    break;
    
  case 'october':
    return `October has 31 days`;
    break;
    
  case 'november':
    return `November has 30 days`;
    break;
    
  case 'december':
    return `December has 31 days`;
    break;  
  }  
}

getDaysInMonth('february', true);

const randomNo = Math.floor(Math.random() * 3) + 1;

function rockPaperScissors(num) {
  if (num === randomNo) {
    return 'The game ends in a tie';
  }
  else if (num === 1 && randomNo === 2) {
    return 'Paper beats rock';
  }
  else if (num === 2 && randomNo === 1) {
    return 'Paper beats rock';
  }
  else if (num === 1 && randomNo === 3) {
    return 'Rock beats scissors';
  }
  else if (num === 3 && randomNo === 1) {
    return 'Rock beats scissors';
  }
  else if (num === 2 && randomNo === 3) {
    return 'Scissors beats paper';
  }
  else if (num === 3 && randomNo === 2) {
    return 'Scissors beats paper';
  }
}

rockPaperScissors();