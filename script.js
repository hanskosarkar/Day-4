// console.log("js is working fine");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '/', '?', '<', '>'];


// let containNums = false;
// let containloweCase = false;
// let containCaps = false;
// let containSpecialcaps = false;

const btnSignup = document.getElementById("btnSignup");
const btnLogin = document.getElementById("btnLogin");
let flipEl = document.getElementsByClassName("content")[0];
let pass = document.getElementById("passWord");
const signupBtn = document.getElementById("signupBtn");
let msg = document.getElementById("msg");

console.log(typeof pass);

// signupBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   checkValidpass();
// });

// function checkValidpass() {
//   for (char in pass) {
//     if (nums.includes(char)) {
//       containNums = true;
//     }
//     if (caps.includes(char)) {
//       containCaps = true;
//     }
//     if (lowerCase.includes(char)) {
//       containloweCase = true;
//     }
//     if (specialChar.includes(char)) {
//       containSpecialcaps = true;
//     }
//   }

//   if (containCaps == true && containNums == true && containSpecialcaps == true && containloweCase == true) {
//     msg.innerHTML = "";
//   }
//   else {
//     msg.innerHTML = "Password should consists of atleast one number, capital letters, lowercase letters and a special character";
//     msg.style.visibility = "visible";
//     msg.style.opacity = "0.5";
//   }

// }

// function checkValidpass() {
//   // event.preventDefault();

//   let containNums = false;
//   let containLowerCase = false;
//   let containCaps = false;
//   let containSpecialChars = false;

//   const password = pass.value;
//   const passwordChars = password.split('');

//   for (const char of passwordChars) {
//     if (nums.includes(parseInt(char))) {
//       containNums = true;
//     }
//     if (caps.includes(char)) {
//       containCaps = true;
//     }
//     if (lowerCase.includes(char)) {
//       containLowerCase = true;
//     }
//     if (specialChar.includes(char)) {
//       containSpecialChars = true;
//     }
//   }

//   if (containCaps && containNums && containSpecialChars && containLowerCase) {
//     msg.textContent = "";
//     // Submit the form or perform further actions for successful signup
//     // document.getElementById("signupForm").submit();
//     // Alternatively, you can display a success message here.
//   } else {
//     msg.textContent = "Password should contain at least one uppercase letter, one lowercase letter, one special character, and one number.";
//     msg.style.visibility = "visible";
//     msg.style.opacity = "0.5";
//   }
// }

console.log(typeof btnLogin);
console.log(typeof btnSignup);

btnSignup.addEventListener("click", flipcard);
btnLogin.addEventListener("click", flipcard);

function flipcard() {
  flipEl.classList.toggle("flip");
}
