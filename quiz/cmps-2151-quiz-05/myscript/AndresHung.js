/*
CMPS2151 - WEB DEV QUIZ#5
Script Source File
Filename: AndresHung.js
Student Name: Andres Hung
*/

/*--------------------------------------Exercise 1: DOM Manipulation --------------------------------*/

const labels = document.querySelectorAll('.icon');
console.log(labels);

const secondLabel = document.querySelectorAll('.icon')[1]; // gets second label in returned node list
console.log(secondLabel);

const textInputs = document.querySelectorAll('input[type="text"]');
console.log(textInputs);

/*-----------------------------------------Exercise 2: Color Toggle --------------------------------*/

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   document.body.classList.toggle('purple');
// });

/*---------------------------------------------Exercise 3: TODO LIST------------------------------------*/

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// for (const item of listItems) {
//   item.addEventListener('mouseover', () => {
//     item.classList.add('selected');
//   });

//   item.addEventListener('mouseout', () => {
//     item.classList.remove('selected');
//   });

//   item.addEventListener('click', () => {
//     item.classList.toggle('done'); // instruction didn't specify but toggle is appropriate here
//   });
// }
