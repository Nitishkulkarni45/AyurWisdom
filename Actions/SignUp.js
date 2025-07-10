const userName = document.getElementById("floatingUserName");
const emailInput = document.getElementById("floatingInput");
const passInput = document.getElementById("floatingPassword");
const conPassInput = document.getElementById("floatingConPassword");
const usernameError = document.getElementById("usernameError");
const emailIdError = document.getElementById("emailIdError");
const conPassError = document.getElementById("conPassError");


//Funtion to validate user name
function validateUsername() {
  const userNameValue = userName.value.trim();
  if (userNameValue === "") {
    usernameError.style.display = "block";
    userName.focus();
    return false;
  } else {
    usernameError.style.display = "none";
    return true;
  }
}

//Funtion to validate mail id
function validateMailId() {
  const email = emailInput.value.trim();
  //To check if email field is empty
  if (email === "") {
    emailIdError.textContent = "Email cannot be blank.";
    emailIdError.style.display = "block";
    emailInput.focus();
    return false;
  }
  //To check if entered mail id is valid or not
  else if (!email.includes("@")) {
    emailIdError.textContent = "Please enter a valid Email Id.";
    emailIdError.style.display = "block";
    emailInput.focus();
    return false;
  }
  //To display error
  else {
    emailIdError.style.display = "none";
    return true;
  }
}

//To check if the entered password
function passCheck() {
  const passCheck = passInput.value.trim();
  const hasSpecialChar = /[!@#$]/.test(passCheck);
  const hasNumber = /\d/.test(passCheck);
  const isLongEnough = passCheck.length >= 8;

    return hasSpecialChar && hasNumber && isLongEnough;
}

//To compare password and cofirm password
function compareRe_EnteredPass() {
  const pass = passInput.value.trim();
  const conPass = conPassInput.value.trim();
  const validPass = passCheck();
  if (pass !== conPass) {
    conPassError.textContent = "Entered passwords do not match.";
    conPassError.style.display = "block";
    conPassInput.focus();
    return false;
  } 
  if(!validPass){
    conPassError.textContent = "Password must be 8+ characters with at least one number and special character (!@#$)";
    conPassError.style.display = "block";
    conPassInput.focus();
    return false;
  }
    conPassError.style.display = "none";
  return true;
}

//Function to toggle password visibility
// Get the toggle password icon and password input field
togglePassword.addEventListener("click", function () {
  // Toggle input type
  const type = passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);

  // Toggle icon class
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash-fill");
});

const validateSignUpForm = (event) => {
  event.preventDefault();
  const isUserNameValid = validateUsername();
  const isEmailValid = validateMailId();
  const compPass = compareRe_EnteredPass();
if (isEmailValid && isUserNameValid && compPass) {
  window.location.href = "/Pages/Home.html";
}
};


userName.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateMailId);
conPassInput.addEventListener('input', compareRe_EnteredPass);