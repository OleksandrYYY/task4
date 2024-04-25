"use strict";

// завдання 1

const currentMaxValue = 4589;
let str = currentMaxValue.toString();
let res = [];
res.push(str);

let reverseMaxValue = +res[0].split("").reverse().join("");
console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

// завдання 2

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity);

/* Я спочатку написав так, let productOfArray = resultsArray.flat(2); ,
но вважаю що треба напевно писати Infinity, так як в задачці пише НЕВІДОМА ГЛИбИНА ВКЛАДЕННОСТІ,
хоча з двійкою працює так само! */

let multiplication = function (arr) {
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  }
  return res;
};

console.log(multiplication(productOfArray));