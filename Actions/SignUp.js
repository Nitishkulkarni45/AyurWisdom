const userName = document.getElementById("floatingUserName");
const emailInput = document.getElementById("floatingInput");


//Funtion to validate user name
function validateUsername (){
    const userNameValue = userName.value.trim();
    if(userNameValue === ''){
     usernameError.style.display = "block";
    userName.focus();
    return false;
}
 else {
  usernameError.style.display = "none";
  return true;
}
}
//Funtion to validate mail id
function validateMailId(){
    const email = emailInput.value.trim();
  //To check if email field is empty  
  if (email === '') {
    emailIdError.textContent = "Email cannot be blank.";
    emailIdError.style.display = "block";
    emailInput.focus();
    return false;
  }
  //To check if entered mail id is valid or not 
  else if (!email.includes('@')) {
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

const validateSignUpForm =(event)=>{
event.preventDefault();
const isUserNameValid = validateUsername();
const isEmailValid = validateMailId();

if( isEmailValid && isUserNameValid){
window.location.href = "/Pages/Home.html";
}
}


