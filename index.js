// EXAMPLE 1 - Toggle a Boolean in JavaScript

let bool = true;
bool = !bool;

console.log(bool); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Toggle a Boolean using strict inequality (!==) operator

// let bool = true;

// bool = bool !== true;
// console.log(bool); // 👉️ false

// bool = bool !== true;
// console.log(bool); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Toggle a Boolean using the ternary operator

// let bool = true;

// bool = bool === true ? false : true;

// console.log(bool); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using Bitwise XOR (^) operator

// let bool = true;

// bool ^= true;
// console.log(bool); // 👉️ 0

// bool ^= true;
// console.log(bool); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 5 - Toggle a boolean using an `if` statement

// let bool = true;

// if (bool === true) {
//   bool = false;
// } else {
//   bool = true;
// }

// console.log(bool);
