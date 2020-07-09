'use strict'

console.log('Use a do...while loop to console.log the numbers from 1 to 1000')
let n = 0
do { n += 1; console.log(n); } while (n < 1000);

//Create an object (an array with keys and values) called person with the following data:
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  dob: 'Jan 5, 1925',
  gender: 'female'
};

console.log('Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number')
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    if (key == 'dob') {
      let yr = (new Date(person.dob)).getFullYear();
      if (yr % 2 == 1) { console.log(yr) }
    };
  };
};

let persons =
  [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      dob: 'Jan 5, 1985',
      gender: 'female'
    },
    {
      firstName: 'Dan',
      lastName: 'Mason',
      dob: 'Jan 28, 1972',
      gender: 'male'
    },
    {
      firstName: 'Maria',
      lastName: 'Castillo',
      dob: 'Feb 1, 2001',
      gender: 'female'
    },
    {
      firstName: 'Sam',
      lastName: 'Cooke',
      dob: 'May 18, 2020',
      gender: 'male'
    },
  ];

console.log('map() over the arrayOfPersons and console.log() their information')
persons.map(p=> console.log(p.firstName,p.lastName,p.dob,p.gender));

console.log('filter() the persons array and console.log only males in the array.')

let males = persons.filter(p => {
  return p.gender == 'male';
})

males.forEach(m => console.log(m.firstName, m.lastName, m.dob, m.gender));

console.log('filter() the persons array and console.log only people that were born before Jan 1, 1990')

let before1990 = persons.filter(p => {
  let yr = (new Date(p.dob)).getFullYear();
  return yr < 1990
});

before1990.forEach(p => console.log(p.firstName, p.lastName, p.dob, p.gender));



