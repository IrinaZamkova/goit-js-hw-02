
const logItems = function (items) {
  for (const item of items) {
    let numberItem = items.indexOf(item) + 1 + "-" + item;

    console.log(numberItem);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
