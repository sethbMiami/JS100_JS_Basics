//Change the function greet from the previous exercise, so that it takes two arguments: 
//a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, 
//so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet2() {
  console.log(greeting(), recipient());
}

greet2();

//Create a function that calculates a person's body mass index (BMI). It should take two parameters: 
//someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

//bmi = weightInKilograms / heightInMeters**2;

const calculateBMI = (height, weight) => (weight / (height / 100)**2).toFixed(2);


console.log(calculateBMI(180, 80)); // "24.69"

//Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

//The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

const catAge = (age) => {
  if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 24;
  } else if (age > 2) {
    return (age - 2) * 4 + 24;
  }

  return 0;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

//Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.


let removeLastChar = string => string.slice(0, -1);


console.log(removeLastChar('hello')); // 'hell'
console.log(removeLastChar('ciao!')); // 'ciao'


const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

let initGame = () => ({ level: 1, score: 0 });

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);