'use strict';
/*  JavaScript Lab#5 - Form Validations
    StudentName: Andres Hung
    Date: November 20, 2024

      Filename: lab05.js
*/

window.addEventListener('load', function () {
  // Q4: Call calcCart to calculate the shopping cart when the page loads
  calcCart();
  // Q4: Verify that the user has selected a fair package to attend by checking onclick and assigning it function call to fairTest
  const regSubmit = this.document.querySelector('#regSubmit');
  regSubmit.addEventListener('click', () => {
    fairTest();
  });
  // Q4: Get all 8 elements and use onblur for each to recalculate the shopping chart when any field loses the focus, call calcCart for each
  //note for the sessionBox use onchange
  const elements = document.querySelectorAll('input');
  const inputs = [];
  for (let i = 0; i < 7; ++i) {
    inputs.push(elements[i]);
  }
  for (const i of inputs) {
    i.addEventListener('blur', () => {
      calcCart();
    });
  }

  const fairPkg = document.querySelector('#fairPkg');
  fairPkg.addEventListener('change', () => {
    calcCart();
  });

  // extra
  const souvenirCheckBox = document.querySelector('#mediaCB');
  souvenirCheckBox.addEventListener('change', () => {
    calcCart();
  });
}); //End of anonymous function

//Q5: fairTest() Function to verify that a fair package was selected by the user
function fairTest() {
  //Q5: Get the fairPkg element
  const fairPkg = document.querySelector('#fairPkg');
  //Q5: check if the selected index is valid or not and display custom validity message
  if (fairPkg.selectedIndex == -1) {
    fairPkg.setCustomValidity('Select a Fair Package');
  } else {
    fairPkg.setCustomValidity('');
  }
} //End fairTest Function

//Q6: calcCart() Function to calculate the shopping cart total
function calcCart() {
  //Q6.1: Calculate the banquet cost for all guests
  const banquetCount = document.querySelector('#banquetBox').value;
  const totalBanquetCost = banquetCount * 55;

  //Q6:2 assign value to the same shopping element in the shopping cart
  const cartBanquet = document.querySelector('#regBanquet');
  cartBanquet.textContent = banquetCount;

  //Two variables are provided to determine the cost of the selected fair package
  let sessionCost = 0; // Initial cost of the fair package
  let sessionChoice = ''; // Initial chosen fair pacakage

  //Q6.3:Get the selected Index of the chosen fair package
  const fairPkg = document.querySelector('#fairPkg');
  const selectedIndex = fairPkg.selectedIndex;

  //Q6.4:Retrieve the name and cost of the selected fair package if valid index is selected
  if (selectedIndex != -1) {
    sessionChoice = fairPkg.options[selectedIndex].textContent;
    sessionCost = fairPkg.options[selectedIndex].value;
  }

  //Q6.5:Determine the cost of the media pack
  let giftCost = 0; // create variable for Initial media cost
  let giftChoice = ''; // create variable for Initial media choice

  //Q6.5: If the user selects the media pack, update the choice and cost
  const checkBox = document.querySelector('#mediaCB');
  if (checkBox.checked) {
    giftCost = 50;
    giftChoice = 'Yes';
  }

  /*Q6.6:Calculate total cost of the science fair by Multiply field values(cost of guest, fair pkg cost and gift cost)
  by 1 to convert them from text strings to numeric values*/
  let totalCost = totalBanquetCost * 1 + sessionCost * 1 + giftCost * 1;

  //Q7.7: Display the field values and calculated values in the Shopping Cart table, ensure formatted correctly, use BZD currency for locale
  const cartName = document.querySelector('#regName');
  const cartGroup = document.querySelector('#regGroup');
  const cartEmail = document.querySelector('#regEmail');
  const cartPhone = document.querySelector('#regPhone');
  const cartFair = document.querySelector('#regFair');
  // const cartBanquet = document.querySelector('#regBanquet'); // already did earlier
  const cartGift = document.querySelector('#regGift');
  const cartTotal = document.querySelector('#regTotal');

  cartName.textContent = `${document.querySelector('#fnBox').value} ${
    document.querySelector('#lnBox').value
  }`;
  cartGroup.textContent = document.querySelector('#groupBox').value;
  cartEmail.textContent = document.querySelector('#mailBox').value;
  cartPhone.textContent = document.querySelector('#phoneBox').value;
  cartGroup.textContent = document.querySelector('#groupBox').value;
  cartFair.textContent = sessionChoice;
  cartGift.textContent = giftChoice;
  cartTotal.textContent = totalCost.toLocaleString('en-us', {
    style: 'currency',
    currency: 'BZD',
  });
} //End of calcCart Function
