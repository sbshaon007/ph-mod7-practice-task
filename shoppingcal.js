let productName = "Wireless Mouse";
let price = 15;
let quantity = 4;
let taxPercent = 5;

let subTotal = price * quantity;
let taxAmount = (subTotal * taxPercent) / 100;
let grandTotal = subTotal + taxAmount;

console.log();
console.log("---- Shopping Bill ----");
console.log();

console.log('Product:', productName);
console.log('Price Per Unit:', price);
console.log('Quantity:', quantity);
console.log('Subtotal:', subTotal);
console.log('Tax (5%):', taxAmount);
console.log('Grand Total:', grandTotal);

console.log();
console.log("------------------------");
// Expected Console Output

// ---- Shopping Bill ----

// Product: Wireless Mouse

// Price per unit: 15

// Quantity: 4

// Subtotal: 60

// Tax (5%): 3

// Grand Total: 63

// ------------------------