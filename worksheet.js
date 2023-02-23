/* ---- Variables ---- */
// Task 1
let dayOfWeek = "Monday";
console.log(dayOfWeek);

dayOfWeek = "Friday";
console.log("I can't wait for " + dayOfWeek + "!");

// Task 2

let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");
console.log(`I've never seen a ${colorInput} ${animalInput}!`);


/* ---- Conditionals ---- */
// Task 1

let timeOfDay = 1300;
let meal;

switch (timeOfDay !== undefined) {
  case timeOfDay < 1200:
    meal = "pancakes";
    break;
  case timeOfDay >= 1200 && timeOfDay <= 1700:
    meal = "sandwich";
    break;
  default:
    meal = "steak";
    break;
}
console.log(meal);

// Task 2
let randomNumber = Math.floor(Math.random() * 11);

if (randomNumber >= 0 && randomNumber <= 2) {
  console.log("Beatles");
} else if (randomNumber >= 3 && randomNumber <= 5) {
  console.log("Stones");
} else if (randomNumber >= 6 && randomNumber <= 8) {
  console.log("Floyd");
} else if (randomNumber === 9 || randomNumber === 10) {
  console.log("Hendrix");
}

/* ---- For Loops ---- */
// Task 1
for (let i = 1; i <= 7; i++) {
  console.log("JavaScript is cool!");
}

// Task 2
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Task 3
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("hello");
  } else {
    console.log("goodbye");
  }
}

/* ---- Functions ---- */
// Task 1
function printMovieName(favoriteMovie) {
  return favoriteMovie
}

let myFavoriteMovie = printMovieName("Matrix");
console.log(myFavoriteMovie)

// Task 2
function askFavoriteBand() {
  let band = prompt("What is your favorite band?");
  return band;
}

let favoriteBand = askFavoriteBand();
console.log("Your favorite band is " + favoriteBand);

// Task 3
function concertDisplay(musicalAct) {
  const myStreet = prompt("What is the name of the street you live on?");
  return `It would be great if ${musicalAct} played a show on ${myStreet}!`;
}

let myConcert = concertDisplay(favoriteBand);
console.log(myConcert)

/* ---- Arrays ---- */
// Task 1
// Create an array called desktopItems
let desktopItems = ['desk', 'camera', 'verizon home wifi hub'];

// Print the item at index 1
console.log(desktopItems[1]);

// Add 'Infinity Gauntlet' to the desktopItems array
desktopItems.push('Infinity Gauntlet');

// Iterate over the desktopItems array using a for loop and print each item
for (let i = 0; i < desktopItems.length; i++) {
  console.log(desktopItems[i]);
}

/* ---- Bonus ---- */
// Task 1

// Generate a random number between 0 and 100
const magicNumber = Math.floor(Math.random() * 101);
let guess = 0;

while (true) {
  // Prompt the user to guess the number
  guess = Number(prompt('Guess the magic number between 0 and 100'));

  // Check if the guess is correct
  if (guess === magicNumber) {
    console.log(`Congratulations! You guessed the magic number (${magicNumber})!`);
    break;
  }

  // Check if the guess is within 10 of the magic number
  if (guess > magicNumber - 10 && guess < magicNumber + 10) {
    console.log('Getting warmer!');
  }

  // Check if the guess is too low
  if (guess < magicNumber) {
    console.log('Too low!');
  }

  // Check if the guess is too high
  if (guess > magicNumber) {
    console.log('Too high!');
  }
}
