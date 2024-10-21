const tax_rate = Number(prompt('Enter tax rate (0.10)'));
const shipping_threshold = Number(prompt('Enter shipping threshold (1000)'));

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for (let item of cart) {
  outputCartRow(item, item.product.price * item.quantity);
}

const subtotal = outputSubTotal(cart);

const tax = outputTax(subtotal, tax_rate);

const shipping = outputShipping(subtotal, shipping_threshold);

const grandTotal = outputGrandTotal(subtotal, tax, shipping);
