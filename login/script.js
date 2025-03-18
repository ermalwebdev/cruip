"use strict";
import { registerForm } from "../modules/register.js";
import { preventDefaultLinks } from "../modules/linksUnits.js";

const links = document.querySelectorAll("a");
const registerBtn = document.querySelector(".btn-register");
const passwordInput = document.querySelector("#passowrd");
const errorMsgPassword = document.querySelector(".error-message");

registerForm(registerBtn, passwordInput, errorMsgPassword);
preventDefaultLinks(links);
