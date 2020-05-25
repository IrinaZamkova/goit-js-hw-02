"use strict";

const formatString = function (string) {
  const words = string.split("");
  if (words.length > 40) {
    words.splice(39);
    words.push("...");
  }
  let newString = words.join("");

  return newString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.",
  ),
);
