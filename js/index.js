console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Pepe";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pepe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker2.length === hacker1.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}
// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let spaceName = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i == hacker1.length - 1) {
    spaceName += hacker1[i].toUpperCase();
  } else {
    spaceName += hacker1[i].toUpperCase() + " ";
  }
}
console.log(spaceName);
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  console.log(i);
  if (i === hacker1.length) {
    reverseName += hacker1[i].toUpperCase();
  } else {
    reverseName += hacker1[i];
  }
}

console.log(reverseName);

//3.3 Depending on the lexicographic order of the strings, print:

let counterHacker1 = 0;
let counterHacker2 = 0;

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if (hacker1[i] == hacker2[i] && hacker1.length == hacker2.length) {
    console.log("What?! You both have the same name?");
    break;
  }
}

// BONUS 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur elit ut erat pharetra suscipit. Vivamus et nisi pulvinar, tempus est ut, semper elit. Etiam imperdiet nisl at mi pellentesque ultricies. Duis euismod sit amet urna eget mattis. In tincidunt sagittis libero a semper. Phasellus mollis magna vel mauris volutpat tincidunt. Vestibulum ut purus finibus, malesuada justo sed, feugiat ligula.Vestibulum non auctor lectus. Nullam dignissim nisl eget risus sagittis, eget semper felis tincidunt. Nunc sit amet dui fringilla, faucibus ex a, tempus enim. Proin condimentum faucibus blandit. Vestibulum porta ante elementum vehicula tempor. Curabitur blandit porta enim, sit amet condimentum quam porta et. Sed aliquet malesuada pellentesque. Phasellus pellentesque ante sed tellus porttitor, at dapibus lorem vestibulum.Ut et ligula odio. Donec dictum non sapien vel pellentesque. Phasellus nec erat ipsum. Praesent non molestie enim. Suspendisse pretium orci et sodales tincidunt. Morbi accumsan eros ac finibus euismod. Sed convallis consequat dui, nec auctor justo. Praesent feugiat gravida malesuada. Fusce vitae ultrices orci. Nulla convallis vel orci et commodo. Vivamus cursus eros eu ex consequat mattis. Duis fringilla nunc ac elit sodales, non ultrices justo porttitor. Vestibulum vitae convallis est. Cras eu sollicitudin mi.";

let countWords = 0;
for (
  let i = 0;
  i < longText.length;
  i++ // number of words
) {
  if (longText[i] == " " || longText[i] == "," || longText[i] == ".") {
    countWords++;
  }
}
console.log(`Hay ${countWords} palabras en el string`);

// contar palabras et
let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  //console.log(longText.slice(i,i+4));

  if (longText.slice(i, i + 4) == " et ") {
    etCount++;
  }
}

console.log(`Hay ${etCount} palabras et`);

//BONUS 2

let phraseToCheck = "stack cats";
let newPhrase = "";

//quitar lo que no sean letras
for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] == " " ||
    phraseToCheck[i] == "," ||
    phraseToCheck[i] == "." ||
    phraseToCheck[i] == "?" ||
    phraseToCheck[i] == "!"
  ) {
    continue;
  }
  newPhrase += phraseToCheck[i].toLowerCase();
}

let reversePhrase = "";

for (let i = newPhrase.length - 1; i >= 0; i--) {
  reversePhrase += newPhrase[i];
}
if (reversePhrase === newPhrase) {
  console.log("Es palíndromo");
} else {
  console.log("No es palíndromo");
}


