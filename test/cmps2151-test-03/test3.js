'use strict';
/*  
     CMPS2151 - Test#3
     JavaScript
      
     StudentID: 2018118240 
     Student Name: Andres Hung  
     Date: November 25, 2024

     Filename: test3.js
*/

/*-------------------------------------------------Section 1: Account Login Form-------------------------------*/

//Section 1: Question 2
const signupForm = document.querySelector('#signup');

signupForm.addEventListener(
  'submit',
  function (e) {
    e.preventDefault();

    //Section 1: Question 3 to 5

    const pwd = document.querySelector('#pwd').value;
    const feedback = document.querySelector('#feedback');

    const regex1 = /[A-Z]/;
    const regex2 = /\d/;
    const regex3 = /[!\$#%]/;

    if (pwd.length < 8) {
      feedback.textContent = 'Your password must be at least 8 characters.';
    } else if (!regex1.test(pwd)) {
      feedback.textContent = 'Your password must include an uppercase letter.';
    } else if (!regex2.test(pwd)) {
      feedback.textContent = 'Your password must include a number.';
    } else if (!regex3.test(pwd)) {
      feedback.textContent =
        'Your password must include one of the following: !$#%';
    } else {
      signupForm.submit();
    }
  } //end of function(e)
); //End signupForm eventListener

/*-------------------------------------------------Section 2: Fees Wasted Form--------------------------------*/

//Section 2: Question 1
const feeItems = document.querySelectorAll('.feeItem');

//Section 2: Question 1a
for (let i = 0; i < feeItems.length; ++i) {
  feeItems[i].addEventListener('click', () => {
    calcTotal();
  });
}

// //Section 2: Question 2 : Function to add values of selected check boxes and display total
function calcTotal() {
  //Section 2: Question 2a
  let feesTotal = 0;

  //Section 2: Question 2b
  for (let i = 0; i < feeItems.length; ++i) {
    if (feeItems[i].checked) {
      feesTotal += Number(feeItems[i].value);
    }
  }

  //Section 2: Question 2c
  document.querySelector('#TotalFees').innerHTML = formatCurrency(feesTotal);
} //end of calcTotal( ) function

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

/*-------------------------------------------------Section 3: Withdraw Reason-------------------------------*/

// Selection lists in the web form
let course = document.getElementById('course');
let section = document.getElementById('section');
let reason = document.getElementById('reason');

// Form button to generate the text of the selected course
let dropCourseBttn = document.getElementById('dropCourse');

// Paragraph containing the text of the selected course
let output = document.getElementById('output');

/* Event handler to modify the content of the section selection list
   when the course selection list changes*/
course.onchange = function () {
  let courseIndex = course.selectedIndex;

  let courseList = course.options[courseIndex].text; //store selection from course

  if (courseIndex === 0) {
    //Section 3: Question 5 - Call showAll function pass the section as parameter
  } else {
    //Section 3: Question 5 - Call filterSelect and pass section and courseList as the category
  }
}; //end course onchange function

/* Event handler to modify the content of the reason selection list
   when the section selection list changes*/
section.onchange = function () {
  let sectionIndex = section.selectedIndex;

  let sectionList = section.options[sectionIndex].text;

  if (sectionIndex === 0) {
    //Section 3: Question 5 - Call showAll function pass reason as parameter
  } else {
    //Section 3: Question 5 - Call filterSelect and pass reason and sectionList as the category
  }
}; //end section onchange function

/*Section 3: Question 3 **********************************************
Name: showAll( ) 
@param: selectList
*/

//end showAll() function **********************************************

/*Section 3: Question 4 **********************************************
Name: filterSelect( ) 
@param: selectList, category
Description: Function filters the category selected to determine which 
options within that selection list will be displayed
*/

//end filterSelect( ) function **********************************************

//Section 3: Question 6****************************************************

/*-------------------------------------------------Section 4: Bonus Alert-------------------------------*/
function showResult() {
  const fullName = document.querySelector('#sname').value;
  const studentID = document.querySelector('#sid').value;
  const course = document.querySelector('#course').selectedOptions[0].value;
  const section = document.querySelector('#section').selectedOptions[0].value;
  const reason = document.querySelector('#reason').selectedOptions[0].value;
  const total = document.querySelector('#TotalFees').textContent;

  // get first and last names accounting for middle names also

  const pieces = fullName.split(' ');
  let firstName;
  let lastName;

  if (pieces.length > 2) {
    firstName = pieces[0];
    lastName = pieces.pop();
  } else {
    [firstName, lastName] = pieces;
  }

  alert(
    `My name is: ${lastName} ${firstName} and my student ID is: ${studentID}. I have: Dropped ${course} - ${section}, because ${reason} And I have wasted $${parseInt(
      total.slice(1)
    )} this semester!!`
  );
} //end showResult( ) function
