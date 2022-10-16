const button1 = document.querySelector("#pword");
const button2 = document.querySelector("#confirm_pword");

let pword = button1.value;
let c_pword = button2.value;

function check() {
  if (pword === c_pword) {
    button1.classList.remove("error");
    button2.classList.remove("error");
  }
}

button1.addEventListener("keydown", (e) => {
  pword += String.fromCharCode(e.keyCode);
  check();
});

button2.addEventListener("keydown", (e) => {
  c_pword += String.fromCharCode(e.keyCode);
  check();
});
