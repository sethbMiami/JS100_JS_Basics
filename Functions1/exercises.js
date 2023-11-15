//Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.


let sum = (num1, num2) => {
  return num1 + num2;
}

console.log(sum(22, 10)); // 32


//Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?


let brendanEichQuote = () => console.log("Always bet on a JavaScript.");


brendanEichQuote();
// logs:
// Always bet on JavaScript.

//Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).


let squaredNumber = (num) => {return num ** 2};

console.log(squaredNumber(3)); // 9

//Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

let compareByLength = (string1, string2) => {

  let x = string1.length;
  let y = string2.length;

  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
}


console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

let extractRegion = (string) => string.split('.')[0].split('_')[1]

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'