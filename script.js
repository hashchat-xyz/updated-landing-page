const hash = document.querySelector(".top-container");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");

// Encryption animation work.

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

  if (/* something to detech if haschat has been moused over*/) {
    console.log("stop animation");
  } else {
    requestAnimationFrame(animation);
  }
}

// function stopAnimation() {
//   window.cancelAnimationFrame();
// }

// hash.addEventListener("mouseover", function () {
//   window.cancelAnimationFrame;
// });

// Description cycles

// const description = document.querySelector(".description");

// const descriptions = [
//   "communities",
//   "DAOs",
//   "NFT owners",
//   "token holders",
//   "bag shillers",
//   "speculatoooors",
//   "artists",
//   "friends",
// ];

// description.addEventListener("mouseover", function descriptionCycles() {
//   arrayLength = descriptions.length;
//   for (i = 0; i < arrayLength - 1; i++) {
//     let z = descriptions[i];
//     description.innerHTML = `${z}`;
//   }
//   console.log(setInterval(descriptionCycles(), 2000));
// });
