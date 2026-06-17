// OPEN

function openPopup(){
  document
  .getElementById("popupOverlay")
  .classList.add("active");

  document.body.style.overflow="hidden";
}

// CLOSE

function closePopup(){
  document
  .getElementById("popupOverlay")
  .classList.remove("active");

  document.body.style.overflow="auto";
}

// SWITCH FORMS

function showSignup(){
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
}

function showLogin(){
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

// PASSWORD TOGGLE

function togglePassword(id,btn){

  const input=document.getElementById(id);

  if(input.type==="password"){
    input.type="text";
    btn.innerHTML="🙈";
  }else{
    input.type="password";
    btn.innerHTML="👁";
  }
}

// ROLE SELECTOR

function selectRole(role){

 document
 .getElementById("signupRole")
 .value=role;

 document
 .querySelectorAll(".role-card")
 .forEach(card=>{
 card.classList.remove("active");
 });

 if(role==="user"){
   userRoleCard.classList.add("active");
 }else{
   adminRoleCard.classList.add("active");
 }
}

// PASSWORD VALIDATION

function validPassword(password){

 const regex=
 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;

 return regex.test(password);
}

// SIGNUP

function signup(){

 const name=
 document.getElementById("signupName").value.trim();

 const email=
 document.getElementById("signupEmail").value.trim();

 const password=
 document.getElementById("signupPassword").value;

 const confirm=
 document.getElementById("signupConfirmPassword").value;

 const role=
 document.getElementById("signupRole").value;

 const error=
 document.getElementById("signupError");

 error.innerHTML="";

 if(!validPassword(password)){
   error.innerHTML=
   "Password must contain 8+ chars, uppercase, lowercase, number and symbol.";
   return;
 }

 if(password!==confirm){
   error.innerHTML=
   "Passwords do not match.";
   return;
 }

 const users=
 JSON.parse(localStorage.getItem("users")) || [];

 const exists=
 users.find(u=>u.email===email);

 if(exists){
   error.innerHTML=
   "Email already registered.";
   return;
 }

 users.push({
   name,
   email,
   password,
   role
 });

 localStorage.setItem(
 "users",
 JSON.stringify(users)
 );

 alert("Signup Successful");

 showLogin();
}

// LOGIN

function login(){

 const email=
 document.getElementById("loginEmail").value.trim();

 const password=
 document.getElementById("loginPassword").value;

 const role=
 document.getElementById("loginRole").value;

 const users=
 JSON.parse(localStorage.getItem("users")) || [];

 const user=
 users.find(
 u =>
 u.email===email &&
 u.password===password &&
 u.role===role
 );

 if(!user){
   alert("Invalid Credentials");
   return;
 }

 localStorage.setItem(
 "loggedUser",
 JSON.stringify(user)
 );

 localStorage.setItem(
 "role",
 user.role
 );

 // REDIRECT

 if(user.role==="admin"){
   window.location.href="admin-dashboard.html";
 }else{
   window.location.href="user-dashboard.html";
 }
}