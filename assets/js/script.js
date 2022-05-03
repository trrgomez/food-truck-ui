// query selectors
const menu = document.querySelector("#menu-icon");
const primaryNav = document.querySelector("#primary-nav");
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");

// toggles the menu button
menu.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    menu.classList.add("fa-times");
  } else {
    primaryNav.setAttribute("data-visible", false);
    menu.classList.remove("fa-times");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get all values from inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const messageValue = message.value;

  // checks if name input is filled out
  if (firstNameValue === "") {
    setErrorFor(firstName, "You must enter your first name");
  } else {
    setSuccessFor(firstName);
  }
  // checks if name input is filled out
  if (lastNameValue === "") {
    setErrorFor(lastName, "You must enter your last name");
  } else {
    setSuccessFor(lastName);
  }

  // checks if email input is filled out
  if (emailValue === "") {
    setErrorFor(email, "You must enter your email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "You must enter a valid email");
  } else {
    setSuccessFor(email);
  }

  // checks if phone number input is filled out
  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "You must enter your phone number");
  } else {
    setSuccessFor(phoneNumber);
  }

  // checks if textarea input is filled out
  if (messageValue === "") {
    setErrorFor(message, "You must enter your message");
  } else {
    setSuccessFor(message);
  }
}

// returns error message
function setErrorFor(input, text) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message
  small.innerText = text;

  // add error class
  formControl.className = "form-control error w50";
}

// returns succes
function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success w50";
}

// validating email with regex
function isEmail(email) {
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
}
