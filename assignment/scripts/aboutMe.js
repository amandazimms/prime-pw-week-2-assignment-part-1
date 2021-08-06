// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = "Amanda";

// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = "Zimmerman";

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
const fullName = `${firstName} ${lastName}`;

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
const luckyNumber = 6;

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
const myLuckySentence = `My name is ${fullName}, and I think ${luckyNumber} is a winner!`;
console.log(myLuckySentence);

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
const adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
const food = "tortellini";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 2;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 3;

// 11 - Add two pets to your `pets` variable
let totalPets = pets + friendsPets;
//console.log(totalPets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 6;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
if (adventurous){
  console.log("Adventures are great!");
} else {
  console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && adventurous) {
  console.log("Roll the dice!");
}

// 15 - Write a conditional that console logs "I can have more pets!" 
// if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
  console.log("I can have more pets!");
} else if (pets === allowedPets) {
  console.log("I have enough pets.");
} else {
  console.log("Oh no, I have too many pets.");
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.
let mostPets;

if (pets > friendsPets) { //if I have more pets than my friend
  mostPets = pets; //let mostPets = the number of my pets

} else if (friendsPets > pets){ //else if my friend has more pets than me
  mostPets = friendsPets; //let mostPets = the number of my friend's pets

} else { //else, (if we have the same number of pets)
  mostPets = pets; //let mostPets = the number of my pets (or could use friendsPets, since they are the same.)
}
console.log(mostPets);


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
switch (true) { //run the switch statement no matter what
  case (pets > friendsPets): //if I have more pets
    mostPets = pets; //set mostPets to my pet QTY
    break;
  case (friendsPets > pets): //if my friend has more pets
    mostPets = friendsPets; //set mostPets to friendsPets QTY
    break;
  case (pets === friendsPets): //if they're equal
    mostPets = pets; //again set it to my QTY, or could be theirs, it doesn't matter. 
    break;
  default: 
    console.log("error - check to see that friendsPets and pets are both valid integers");
}
console.log(mostPets);


// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
pets >= friendsPets ? mostPets = pets : mostPets = friendsPets;
console.log(mostPets);
//in this case I didn't bother with 'if mostPets = pets' because I don't think you can evaluate 
//something with 3 outcomes with ternary operators, and it didn't make a difference to the outcome anyway,
//just good for readability.
