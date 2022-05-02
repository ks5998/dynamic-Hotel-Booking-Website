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
