/*
CMPS2151 - WEB DEV LAB#04
Script Source File
Filename: functions.js
*/

/* Define your functions here for Question #6 */

/* Q#6.1
Name: outputCartRow()
@param: item, total
Description: Function uses document.write to create <tr> and <td> to create the table structure for items, quantity and price
*/
function outputCartRow(item, total) {
  document.write(`
    <tr>
        <td><img src="images/${item.product.filename}" /></td>
        <td>${item.product.title}</td>
        <td>${item.quantity}</td>
        <td>$${item.product.price.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td>
    </tr>  
  `);
}

// console.log('Data is linked: ' + item.product.title);

/* Q#6.4
Name: calculateTotal()
@param: quantity, price
Description: Calcluates the total cost and return value should be the product of quantity and price
*/
function calculateTotal(quantity, price) {
  return quantity * price;
}

/* Q#6.4
Name: calculateTax()
@param: subtotal, rate
Description: Calculates the tax cost and return value should be the product of subtotal and rate
*/
function calculateTax(subtotal, rate) {
  return subtotal * rate;
}

/* Q#6.4
Name: calculateShipping()
@param: subtotal, threshold
Description: Calculates the shipping cost, returns: 0 if subtal is greater than the shipping threshold, 
otherwise shipping cost is $40
*/
function calculateShipping(subtotal, threshold) {
  return subtotal > threshold ? 0 : 40;
}

/* Q#6.4
Name: calculateGrandTotal()
@param: subtotal, tax, shipping
Description: Calculates the Grand Total Cost and returns the value of the sum of subtotal, tax and shipping
*/
function calculateGrandTotal(subtotal, tax, shipping) {
  return subtotal + tax + shipping;
}

/* Q#6.4
Name: outputCurrency()
@param: num 
Description: takes a number value as paramter, which is either tax, shipping, total grand total, 
It writes the formatted cost in currency, two decimal places in the cart rows of the table. 
num should be the const vairables you defined from cmps2151Lab05.js
*/
function outputCurrency(num) {
  document.write(`$${num.toFixed(2)}`);
}
