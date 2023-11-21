const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }

let total = prices.reduce((total, price) => total + price);
console.log(total);

let min = prices.reduce((min, price) => min > price ? price : min);
console.log(min);