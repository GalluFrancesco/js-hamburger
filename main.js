
const openButton = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.fa-times');
const hamburgerMenu = document.querySelector('.hamburger-menu');
/*
 button, ti aggiungo un evento, nel momento in cui
 ricevi un 'click' => allora esegui ciò che c'è scritto
 dentro la function.
*/
openButton.addEventListener('click', function () {
    hamburgerMenu.classList.add('active')
})

closeButton.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active')
})