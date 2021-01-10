//Menu Modals//

// Open Play modal
$('#playbutton').click(function () {
    $('#playModal').modal('toggle');
})

// Open Instructions modal
$('#helpbutton').click(function () {
    $('#infoModal').modal('toggle');
})

//Open Leaderboard
$('#rankbutton').click(function () {
    $('#rankModal').modal('toggle');
})

//Close Play menu
$('#playClose').click(function () {
    $('#playModal').modal('toggle');
})

//Close Instructions
$('#helpClose').click(function () {
    $('#infoModal').modal('hide');
})

//Close Leaderboard
$('#rankClose').click(function () {
    $('#rankModal').modal('hide');
})



//Main Game//

const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false; // Property if card has been flipped
let lockBoard = false; // Stops more clicks during card flips
let firstCard, secondCard; // Declare first and second card variables
let totalMatch = 0; //total number of matches

//Shuffle Cards//
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 36);
        card.style.order = randomPos;
    });
})();

function cardTurn() {
    if (lockBoard) {
        return;
    };

    if (('.memory-card') === firstCard) {
        return; //Stops double click of same card
    };

    this.classList.add('flip') //Flips over cards

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this; //First Memory card

        return;
    }

    secondCard = this; //Second Memory card

    checkForMatch();
}

function checkForMatch() {
    //Card matching logic
    if (firstCard.dataset.image ===
        secondCard.dataset.image) {
        disableCards(); // If cards match disable them
        totalMatch += 1;
    }

    else {
        unflipCards(); // If cards do not match, unflip them
    }
}

function disableCards() {
    //If both cards match, keep them visible
    firstCard.removeEventListener('click', cardTurn);
    secondCard.removeEventListener('click', cardTurn);
    resetBoard();
}

function unflipCards() {
    //If cards do not match, turn back over.
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1000); //Display mismatched cards for 1000ms
}

function resetBoard() {
    cardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

//End game modal
if (totalMatch === (cards.length)/2) {  
    $('#endModal').modal('show');
}

cards.forEach(card => card.addEventListener('click', cardTurn)); //Executes cardTurn function

