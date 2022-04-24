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

window.onload = animation();

// Description cycle work.

const description = document.querySelector(".description");

const descriptions = [
  "communities.",
  "DAOs.",
  "NFT owners.",
  "token holders.",
  "friends.",
  "bag shillers.",
  "speculatoooors.",
  "artists.",
];

let descIndex = 0;

let intervalId = setInterval(function () {
  if (descIndex <= 6) {
    descIndex += 1;
  } else if (descIndex == 7) {
    descIndex = 0;
  }
  description.innerHTML = `${descriptions[descIndex]}`;
}, 1500);

description.addEventListener("mouseover", function () {
  clearInterval(intervalId);
  description.innerHTML = `you.`;
});
