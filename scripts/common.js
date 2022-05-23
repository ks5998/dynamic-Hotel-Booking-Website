const loginModal = document.querySelector(".login-modal");
const getInTouchModal = document.querySelector(".get-in-touch");

function handleLogin(e) {
  loginModal.style.display = "block";
}

function closeLogin(e) {
  e.preventDefault();
  loginModal.style.display = "none";
}

function handleContactUs(e) {
  getInTouchModal.style.display = "block";
}


/*--------------------------------------------------------------------*/

function store(){
  var inputUsername=document.getElementById("username");
  var inputPassword=document.getElementById("password");
  localStorage.setItem("username",inputUsername.value);
  localStorage.setItem("password",inputPassword.value);
};

function userLogin(){
  store();
  let username=document.getElementById("username").value;
  let password=document.getElementById("password").value;
  sessionStorage.username = 'admin';
  sessionStorage.isLogin = true;
  if(username==='admin' && password === 'admin'){
     confirm('Successfully loggedin');

   var btn = document.getElementById("loginM");
   btn.value = "logout"; 
   btn.innerText="LOGOUT";
   document.getElementById("payNow").disabled=false;
   
  }

}

function logoutFunc(){
    var btn1=document.getElementById("loginM");    
    if(btn1.value=="logout"){
     btn1.value = "login"; 
     btn1.innerText="LOGIN";
     localStorage.clear();
     document.getElementById("payNow").disabled=true;
    }
}

/*--------------------------------------------------------------------*/

