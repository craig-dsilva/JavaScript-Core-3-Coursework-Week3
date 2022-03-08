let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let price = 0;
console.log("OTY  ITEM       TOTAL");
order.forEach((item) => {
  let { itemName, quantity, unitPrice } = item;
  console.table(`${quantity}    ${itemName} ${unitPrice * quantity}`);
  price += unitPrice * quantity;
});
console.log("");
console.log(`Total: ${price}`);
