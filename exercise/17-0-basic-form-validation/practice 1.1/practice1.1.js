'use strict';
/*    In Class Practice 3
      
	  Course: CMPS2151 - Web Dev
      Project to validate a form used for setting up a new account
      Author: Manuel Medina

      Filename: practice1.1.js
	  
*/

const submitButton = document.querySelector('#submitButton');
const passwordField = document.querySelector('#pwd');
const passwordConfirmField = document.querySelector('#pwd2');
const message = document.querySelector('#message');

submitButton.addEventListener('click', (e) => {
  if (passwordField.validity.patternMismatch) {
    passwordField.setCustomValidity(
      'Your password must be at least 8 characters with at least one letter and one number'
    );
    return false;
  } else {
    passwordField.setCustomValidity('');
  }

  if (passwordField.value != passwordConfirmField.value) {
    passwordConfirmField.setCustomValidity(
      'Your password confirmation does not match'
    );
    return false;
  } else {
    passwordConfirmField.setCustomValidity('');
  }

  return true;
});
