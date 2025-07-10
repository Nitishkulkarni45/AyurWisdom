const emailInput = document.getElementById("floatingInput");
const passwordInput = document.getElementById("floatingPassword");
const togglePassword = document.getElementById("togglePassword");


//Function to validate mail Id
function validatemailId() {
  const email = emailInput.value.trim();
  //Check for the valid mail Id
  if (email === "") {
    mailError.textContent = "Email cannot be blank.";
    mailError.style.display = "block";
    emailInput.focus();
    return false;
  }
  //To check if entered mail id is valid or not
  else if (!email.includes("@")) {
    mailError.textContent = "Please enter a valid Email Id.";
    mailError.style.display = "block";
    emailInput.focus();
    return false;
  }
  //To display error
  else {
    mailError.style.display = "none";
    return true;
  }
}

//Function to validate password
function emptyPassCheck() {
  const password = passwordInput.value.trim();
  //Check if the password field is empty
  if (password === "") {
    passError.textContent = "Password field cannot be empty";
    passError.style.display = "block";
    passwordInput.focus();
    return false;
  } else {
    return true;
  }
}

function validatePass() {
  //Passing true value for now untill connected to DB
  return true;
}

//Function to toggle password visibility
// Get the toggle password icon and password input field
togglePassword.addEventListener("click", function () {
  // Toggle input type
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle icon class
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash-fill");
});

//Function to validate the login form
const validateLoginForm = (event) => {
  event.preventDefault();
  const isValidMailId = validatemailId();
  const isEmptyPass = emptyPassCheck();
  const isValidPass = validatePass();
  if (isValidMailId && isEmptyPass && isValidPass) {
    window.location.href = "/Pages/Home.html";
  }
};
