// Modal - select play button
var modal = document.querySelector(".modal");
var playbutton = document.querySelector("playbutton");
var closebutton = document.querySelector(".close-button")

function toggleModal() {
    modal.classList.toggle("modal-active");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

playbutton.addEventListener("click", toggleModal);
closebutton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick)

//Main game

//Timer

$()

// Select cards
const cards = document.querySelector(".memory-card");

function cardTurn() {
    console.log('Yay!')
    console.log(this)
}

cards.forEach(card => card.addEventListener('click', cardTurn));