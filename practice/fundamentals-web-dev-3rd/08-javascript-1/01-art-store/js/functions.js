/* define your functions here */

const calculateTotal = (quantity, price) => {
  return quantity * price;
};

const outputCartRow = (item, total) => {
  document.write(`
    <tr>
        <td><img src="images/${item.product.filename}"></td>
        <td>${item.product.title}</td>
        <td>${item.quantity}</td>
        <td>${item.product.price.toFixed(2)}</td>
        <td>${total.toFixed(2)}</td>
    </tr>
  `);
};

const outputSubTotal = (cart) => {
  const subtotal = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  document.write(`
    <tr class="totals">
        <td colspan="4">Subtotal</td>
        <td>$${subtotal.toFixed(2)}</td>
    </tr>
  `);

  return subtotal;
};

const outputTax = (subtotal, rate) => {
  const tax = subtotal * rate;

  document.write(`
    <tr class="totals">
        <td colspan="4">Tax</td>
        <td>$${tax.toFixed(2)}</td>
    </tr>
  `);

  return tax;
};

const outputShipping = (subtotal, threshold) => {
  const shipping = subtotal > threshold ? 0 : 40;

  document.write(`
    <tr class="totals">
        <td colspan="4">Shipping</td>
        <td>$${shipping.toFixed(2)}</td>
    </tr>
  `);

  return shipping;
};

const outputGrandTotal = (subtotal, tax, shipping) => {
  const grandTotal = subtotal + tax + shipping;

  document.write(`
    <tr class="totals">
      <td colspan="4" class="focus">Grand Total</td>
      <td class="focus">$${grandTotal}</td>
    </tr>
  `);

  return grandTotal;
};
