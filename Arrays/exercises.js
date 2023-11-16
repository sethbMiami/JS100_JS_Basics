//Write a function that returns the first element of an input array. For example:


function first(array) {
  return array[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

//Write a function that returns the last element of an input array. For example:

let last = (arr) => {
  const lastItem = arr.pop();
  return lastItem;
}


console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');
console.log(energy);

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
console.log(alphabet);

//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let count = scores.filter((x) => x >= 100).length;

console.log(count);

//We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. 
//Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.



let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...
vocabulary.join().replace(/,/g, ' ').split(' ').forEach((ele) => console.log(ele));
//console.log(vocabulary);
//vocabulary.forEach((x) => console.log(x));


//Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

//For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let isDestination = (destination) => {
  return destinations.filter((dest) => dest === destination).length > 0;
}

console.log(isDestination('Barcelona'));

//We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, 
//with each portion of the passcode separated by a hyphen (-).



let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

passcode = passcode.join('-');
console.log(passcode);

//We have made a grocery list, and as we check off items on that list, we would like to remove them.

//Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

while (groceryList.length > 0) {
  console.log(groceryList[0]);
  groceryList.shift();
}



// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []