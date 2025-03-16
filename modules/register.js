export function registerForm(registerBtn, passwordInput, errorPw) {
  registerBtn.addEventListener("click", () => {
    if (passwordInput.value.length < 10) {
      errorPw.textContent =
        "Please chose a password with atleast 10 characters";
      errorPw.style.display = "inline";
    } else {
      errorPw.style.display = "none";
    }
  });
}
