//Menu Modals//

$('#playbutton').click(function() {
    $('#playModal').modal('toggle')
})

$('#helpbutton').click(function() {
    $('#infoModal').modal('show')
})

$('#playClose').click(function() {
    $('playModal').modal('hide')
})

//Timer//

//Main Game//

const cards = document.querySelectorAll('.memory-card');

function cardTurn() {
    this.classList.toggle('flip') //Flips over cards
}

cards.forEach(card => card.addEventListener('click', cardTurn));


//Shuffle Cards//


