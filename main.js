document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

document.getElementById("bookmark").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle2");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

// Time to code the modal!! 
let open1 = document.getElementById('open1')
let open2 = document.getElementById('open2')
const modal = document.getElementById('modal')
const backdrop = document.getElementById('backdrop')
let close = document.getElementById('close-modal')

function closeModal() {
  modal.style.display = "none"
  backdrop.style.display = "none"
}

function openModal() {
  modal.style.display = "block";
  backdrop.style.display = "block";
}

// Setup the open modal functions
open1.onclick = function() {
  openModal()
};

open2.onclick = function() {
  openModal()
};

close.onclick = function() {
  closeModal()
}
