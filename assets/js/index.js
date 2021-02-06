//Menu Modals//

// Open Play modal
$('#playbutton').click(function () {
    $('#playModal').modal('toggle');
})

// Open Instructions modal
$('#helpbutton').click(function () {
    $('#infoModal').modal('toggle');
    clearInterval(timer);
})

//Puts most recent game time in My Times modal
function myTime() {
    let myTime = localStorage.getItem("endTime");
    document.getElementById("my-time").innerHTML = myTime;
    console.log(myTime);
}

//Open My Times
$('#rankbutton').click(function () {
    $('#rankModal').modal('toggle');
    setTimeout(() => {
        myTime();
    }, 300)
})

//Open Pause
$('#pauseBtn').click(function () {
    $('#pauseModal').modal('toggle');
    clearInterval(timer);
})

//Close Play menu
$('#playClose').click(function () {
    $('#playModal').modal('toggle');
})

//Close Instructions
$('#helpClose').click(function () {
    $('#infoModal').modal('toggle');
    startTimer();
})

//Close Pause
$('#pauseClose').click(function () {
    $('#pauseModal').modal('toggle');
    startTimer();
})

//Close My Times
$('#rankClose').click(function () {
    $('#rankModal').modal('toggle');
})

//Main Game//

const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false; // Property if card has been flipped
let lockBoard = false; // Stops more clicks during card flips
let firstCard, secondCard; // Declare first and second card variables
let totalMatch = 0; //total number of matches
let timerOn = true;

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

    if (this == firstCard) {
        return; //Stops double click of same card
    };

    this.classList.add('flip') //Flips over cards

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this; //First Memory card
        if (timerOn === true) {
            startTimer();
            timerOn = false}

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
        console.log(totalMatch);

        document.getElementsByClassName('easy-game');
            if (totalMatch == 6) {
                $('#endModal').modal('show');
                document.querySelector("#totalTime").innerHTML = minutes + ":" + seconds;
                let endTime = minutes + ":" + seconds;
                localStorage.setItem("endTime", endTime);
                clearInterval(timer);
            }
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

//Timer - Code for timer count accredited to a CI student, found at https://github.com/karzuin/MS2/blob/master/assets/js/main.js

let time = 0;
let timer;
function startTimer() {
    timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

cards.forEach(card => card.addEventListener('click', cardTurn)); //Executes cardTurn function

//Reset Button
$('#resetBtn').click(function () {
    window.location.reload();
})