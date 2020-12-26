// Modal - select play button
var modalBtn =
document.getElementById("playBtn");

var modalBg = 
document.querySelector('.modal-bg');

var closeBtn = 
document.querySelector('.close-btn')

modalBtn.onclick = function() {
    modalBg.style.display = "block"
}

closeBtn.onclick = function() {
    modalBg.style.display = "none"
}

