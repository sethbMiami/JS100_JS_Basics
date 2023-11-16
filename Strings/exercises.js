//Determine the length of the string "These aren't the droids you're looking for.".

console.log("These aren't the droids you're looking for.".length);

//Take the string 'confetti floating everywhere' and transform it to upper case.

let upperString = 'confetti floating everywhere'.toUpperCase()

console.log(upperString);

//Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

let repeat = (num, string) => {
  for (let i = 0; i < num; i++) {
    console.log(string);
  }
}


repeat(3, 'ha'); // 'hahaha'

console.log("A pirate I was meant to be! \nTrim the sails and roam the sea!");

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(/x/.test(byteSequence));
console.log(byteSequence.includes('x')); // true)

let emptyString = '    ';
console.log(emptyString.length);

//Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

let isBlank = (string) => {
  return string.trim().length === 0;
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

//Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string2 = 'launch school tech & talk';

let string3 = string2.split(' ').map((x) => x[0].toUpperCase() + x.slice(1)).join(' ');

console.log(string3);