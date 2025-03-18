"use strict";
import { preventDefaultLinks } from "../modules/linksUnits.js";
import { registerForm } from "../modules/register.js";

//Global Selector
const links = document.querySelectorAll("a");
const passwordInput = document.querySelector("#passowrd");
const registerBtn = document.querySelector(".btn-register");
const errorMsgPassword = document.querySelector(".error-message");

//Preventing links
preventDefaultLinks(links);
//email validity
registerForm(registerBtn, passwordInput, errorMsgPassword);

//check if password is greater than 10
// registerBtn.addEventListener("click", (e) => {
//   if (passwordInput.value.length < 10) {
//     errorMsgPassword.textContent =
//       "Please chose a password with atleast 10 characters";
//     errorMsgPassword.style.display = "inline";
//   } else {
//     errorMsgPassword.style.display = "none";
//   }
// });
