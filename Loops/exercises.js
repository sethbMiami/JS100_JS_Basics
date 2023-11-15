// solutions to the Loop exercises

for (let i = 0; i <= 10; i += 2) {
  // include your code here
  console.log(i);
}


for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}
console.log('Launch');

let greeting = 'Aloha!';
for (let i = 0; i < 3; i++) {
  console.log(greeting);
}

//Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

for (let i = 1; i < 101; i++) {
  console.log(i * 2);
}

//Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(`Element at index ${index} is ${array[index]}`);
  index++;
}

//Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let city of cities) {
  if (city) {
    console.log(city);
  } else {
    continue;
  }
}

cities.forEach((city) => {
  if (city) {
    console.log(city);
  }
});

//The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

//Write a while loop that logs all odd natural numbers between 1 and 40.
let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}


//Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let index1 = 0;

while (index1 < fish.length) {

  console.log(fish[index1]);

  if (fish[index1] === 'Nemo') {
    break;
  }


  index1++;
}

//other problems didn't need any code 

