const hash = document.querySelector(".hashchat");
const description = document.querySelector(".description");

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

// Encryption animation

hash.addEventListener("mouseover", function test() {
  for (i = 0; i < 5; i++) {
    let randomIndex1 = Math.floor(Math.random() * alphabet.length);
    let randomIndex2 = Math.floor(Math.random() * alphabet.length);
    let randomIndex3 = Math.floor(Math.random() * alphabet.length);
    let randomIndex4 = Math.floor(Math.random() * alphabet.length);
    let y =
      alphabet[randomIndex1] +
      alphabet[randomIndex2] +
      alphabet[randomIndex3] +
      alphabet[randomIndex4];

    hash.innerHTML = `${y}`;
    console.log(y);
  }
  requestAnimationFrame(test);
});

// Description cycles
