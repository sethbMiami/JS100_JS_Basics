//Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

let randomNumber = Math.round(Math.random());
console.log(randomNumber);

if (randomNumber) {
  console.log("Yes!");
} else {
  console.log("No.");
}
//Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

(randomNumber) ? console.log("Yes") : console.log("no");

// Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.

let weather = "sunny";

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

//Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");

}

//other problem questions didn't require code