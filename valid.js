document.getElementById("number").addEventListener("invalid",overFifty);

function overFifty() {
  let fifty = document.getElementById("feedback");
  fifty.classList.remove('show2');
}