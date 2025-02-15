function calculateTotalPrice(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];


let shoppingCart2 = [
  { name: "Milk", price: 4, quantity: 1 },
  { name: "Bread", price: 2, quantity: 2 },
  { name: "Eggs", price: 3.5, quantity: 1 },
];

console.log("Total pirce: ", calculateTotalPrice(shoppingCart)+"$");
console.log("Total pirce: ", calculateTotalPrice(shoppingCart2)+"$");


//let totalPrice = 0;
// for (let item of shoppingCart) {
//   totalPrice += item.price * item.quantity;
// }
// console.log("Total price:", totalPrice);