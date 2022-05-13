const form = document.querySelector("#form");

const firstNameInputField = document.querySelector("#first-name-input-field");
const lastNameInputField = document.querySelector("#last-name-input-field");
const emailInputField = document.querySelector("#email-input-field");
const passwordInputField = document.querySelector("#password-input-field");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

function verifyEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function clearClasses() {
  firstNameInputField.classList.remove("error");
  lastNameInputField.classList.remove("error");
  emailInputField.classList.remove("error");
  passwordInputField.classList.remove("error");

  firstNameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearClasses();

  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  let isFirstNameValid = false;
  let isLastNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  if (firstName.value.length == 0) {
    firstNameInputField.classList.add("error");
    firstNameError.innerHTML = "First Name cannot be empty";
    firstNameError.classList.add("active");
  } else {
    isFirstNameValid = true;
  }

  if (lastName.value.length == 0) {
    lastNameInputField.classList.add("error");
    lastNameError.innerHTML = "Last Name cannot be empty";
    lastNameError.classList.add("active");
  } else {
    isLastNameValid = true;
  }

  if (email.value.length == 0) {
    emailInputField.classList.add("error");
    emailError.innerHTML = "Email cannot be empty";
    emailError.classList.add("active");
  }

  if (email.value.length > 0 && !verifyEmail(email.value)) {
    emailInputField.classList.add("error");
    emailError.innerHTML = "Looks like this is not an email";
    emailError.classList.add("active");
  }

  if (email.value.length > 0 && verifyEmail(email.value)) {
    isEmailValid = true;
  }

  if (password.value.length == 0) {
    passwordInputField.classList.add("error");
    passwordError.innerHTML = "Password cannot be empty";
    passwordError.classList.add("active");
  } else {
    isPasswordValid = true;
  }

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

    window.location.href = "/";
  }
});
