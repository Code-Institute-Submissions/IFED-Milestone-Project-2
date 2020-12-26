// Modal - select play button
var modal = document.querySelector(".modal");
var playbutton = document.querySelector("playbutton");

function toggleModal() {
    modal.classList.toggle(".modal-active");
}

function windowOnClick() {
    if (event.target === modal) {
        toggleModal();
    }
}

playbutton.addEventListener("click", toggleModal)