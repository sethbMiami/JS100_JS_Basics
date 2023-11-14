// exercise 1

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while(iceCreamDensity > 0)
{
    console.log('Drip...');

    iceCreamDensity --;
}

console.log('The '+ iceCreamTaste +' ice cream melted.');

console.log(Number.MAX_VALUE);

console.log(4 * 5 + 3 ** 2 / 10);

console.log(Date.now());

let today = new Date();

console.log(today.getYear());
console.log(today.getFullYear());

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}