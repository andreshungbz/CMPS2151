/*
CMPS2151 - WEB DEV LAB#04
Script Source File
Filename: cmps2151Lab04.js
*/

/*Q#5: Create a prompt with message 'Enter Tax Rate (0.10)' assign it to a const vairable called tax_rate */
const tax_rate = Number(prompt('Enter Tax Rate (0.10)'));
console.log(`tax_rate: ${tax_rate}`);

/*Q#5: Create a prompt with message 'Enter Shipping Threshold (Max: 1000)' assign it to a const vairable called shipping_threshold */
const shipping_threshold = Number(
  prompt('Enter Shipping Threshold (Max: 1000)')
);
console.log(`shipping_threshold: ${shipping_threshold}`);

/* vairable for running total for subtotals initialized to zero */
let subtotal = 0;

/* Q#6.3: Add a for loop here that iterates through the data [i.e. the cart] 
access each cart item quantity and price, and call calculateTotal function, the value returned should be 
assigned to variable called total, this total will be added to the subtotal vairable, to store subtotal for each calculated total from the array. 
Lastly call outputCartRow() function that will generate the dynamic table and add in values for each item and its total.
*/
for (const item of cart) {
  const total = calculateTotal(item.quantity, item.product.price);
  subtotal += total;
  outputCartRow(item, total);
}

/*Q#7: Create const vairables for tax, shipping and grand assign them the calucated values from the function call to their 
respective functions you created in functions.js */
const tax = calculateTax(subtotal, tax_rate);
const shipping = calculateShipping(subtotal, shipping_threshold);
const grandTotal = calculateGrandTotal(subtotal, tax, shipping);
