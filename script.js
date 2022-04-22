const hash = document.querySelector(".top-container");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");

// Encryption animation work.
var startstop = 1;

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function animation() {
  for (i = 0; i < 5; i++) {
    let randomIndex1 = Math.floor(Math.random() * alphabet.length);
    let randomIndex2 = Math.floor(Math.random() * alphabet.length);
    let randomIndex3 = Math.floor(Math.random() * alphabet.length);
    let randomIndex4 = Math.floor(Math.random() * alphabet.length);

    let a = alphabet[randomIndex1];
    let b = alphabet[randomIndex2];
    let c = alphabet[randomIndex3];
    let d = alphabet[randomIndex4];

    l1.innerHTML = `${a}`;
    l2.innerHTML = `${b}`;
    l3.innerHTML = `${c}`;
    l4.innerHTML = `${d}`;
  }

  if (startstop == 0) {
    console.log("Thanks for playing :)");
  } else {
    requestAnimationFrame(animation);
  }
}

hash.addEventListener("mouseover", function () {
  l1.innerHTML = `H`;
  l2.innerHTML = `a`;
  l3.innerHTML = `s`;
  l4.innerHTML = `h`;
  startstop = 0;
  window.cancelAnimationFrame;
});

// Description cycle work.

const description = document.querySelector(".description");

const descriptions = [
  "DAOs.",
  "NFT owners.",
  "token holders.",
  "bag shillers.",
  "speculatoooors.",
  "artists.",
  "friends.",
];

// description.addEventListener("click", function () {
//   let randomIndex5 = Math.floor(Math.random() * descriptions.length);
//   let descriptionCycle = descriptions[randomIndex5];
//   description.innerHTML = descriptionCycle;
// });

// let clickCount = -1;

// description.addEventListener("click", function () {
//   clickCount++;
//   // console.log(clickCount);
//   if (clickCount == 0) {
//     description.innerHTML = `${descriptions[0]}`;
//   } else if (clickCount == 1) {
//     description.innerHTML = `${descriptions[1]}`;
//   } else if (clickCount == 2) {
//     description.innerHTML = `${descriptions[2]}`;
//   } else if (clickCount == 3) {
//     description.innerHTML = `${descriptions[3]}`;
//   } else if (clickCount == 4) {
//     description.innerHTML = `${descriptions[4]}`;
//   } else if (clickCount == 5) {
//     description.innerHTML = `${descriptions[5]}`;
//   } else if (clickCount == 6) {
//     description.innerHTML = `${descriptions[6]}`;
//   } else if (clickCount == 7) {
//     description.innerHTML = `${descriptions[7]}`;
//   } else {
//     let clickCount = -1;
//   }
// });

description.addEventListener("click", function () {
  if (description.innerHTML == "communities.") {
    description.innerHTML = `${descriptions[0]}`;
  } else if (description.innerHTML == "DAOs.") {
    description.innerHTML = `${descriptions[1]}`;
  } else if (description.innerHTML == "NFT owners.") {
    description.innerHTML = `${descriptions[2]}`;
  } else if (description.innerHTML == "token holders.") {
    description.innerHTML = `${descriptions[3]}`;
  } else if (description.innerHTML == "bag shillers.") {
    description.innerHTML = `${descriptions[4]}`;
  } else if (description.innerHTML == "speculatoooors.") {
    description.innerHTML = `${descriptions[5]}`;
  } else if (description.innerHTML == "artists.") {
    description.innerHTML = `${descriptions[6]}`;
  } else {
    description.innerHTML = `communities.`;
  }
});
