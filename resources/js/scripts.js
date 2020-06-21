// Create variables to grab DOM elements:
let modalButton = document.querySelector("#copyright-btn");
let modal = document.querySelector(".modal");
let closeModalBtn = document.querySelector("#close-modal-btn");

// Create event listeners:
modalButton.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}
