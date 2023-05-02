console.log(19.90 * 0.6); // 0.6 is the value of 40% discounted from 100%, which is 60%

let price = 19.90; // let = var & var = let, but using 'let' is more usual.
let discount = 0.4;
let priceWithDiscount =  price * (1 - discount);
console.log(priceWithDiscount);

let productName = "Notebook"; // String (sequence of letters, symbols, etc)
let category = "Office Supplies";
console.log(
    "Product: " + productName +
    ", Category: " + category +
    ", Price: " + price);
console.log("Discount: " + discount * price);
console.log("Final Price: " + priceWithDiscount);