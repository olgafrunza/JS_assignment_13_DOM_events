// ! 1.Write a div that has a button to change its background every time it's clicked.
let bg = document.getElementById("bg");
let btn = document.getElementById("btn");
let colors = ["yellow", "blue", "green", "red"];
let counter = 0;

btn.addEventListener("click", () => {
  if (counter < 3) {
    bg.style.backgroundColor = colors[++counter];
  } else {
    counter = 0;
    bg.style.backgroundColor = colors[counter];
  }
});

// ! 2. Write an input field that checks if the entered sentence is a palindrome or not.

const palindromeBtn = document.getElementById("palindrome-btn");
const palindromeInput = document.getElementById("palindrome-input");
const palindromeRes = document.getElementById("palindrome");

function checkPalindrome(str) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

palindromeBtn.addEventListener("click", () => {
  let str = palindromeInput.value;
  palindromeInput.value = "";
  if (checkPalindrome(str)) {
    palindromeRes.innerText = `${str} is a palindrome`;
  } else {
    palindromeRes.innerText = `${str} is not a palindrome`;
  }
});

// ! 3.Write a div that has a button to display a random password on a screen.

const passwordBtn = document.getElementById("password-btn");
const passwordRes = document.getElementById("password");

const chars = [
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

passwordBtn.addEventListener("click", () => {
  let pass = "";
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    pass += chars[randomNumber];
  }
  passwordRes.innerText = pass;
});
