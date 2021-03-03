// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// ES6 map
// var numbers = [1, 3, 5, 6];

// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 4);
// }

// numbers.forEach(double);

// console.log(newNumbers);

// ES6 Filter
// var numbers = [50, 30, 5, 6];

// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });
// console.log(newNumbers);

// ES6 Reduce "means accumulate the value by doing something to each item in an array"

// var numbers = [10, 25, 65, 48, 77];

// var newNumbers = numbers.reduce(function (accumulate, currentNumber) {
//   console.log("accumulate = " + accumulate);
//   console.log("currentNumber = " + currentNumber);
//   return accumulate + currentNumber;
// });

// console.log(newNumbers);

//ES6 find()
// var numbers = [1, 5, 65, 48, 77];

// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);
// ES6 findIndex() it will find the index of first item that matches

var numbers = [1, 5, 65, 48, 77];

const newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers);
