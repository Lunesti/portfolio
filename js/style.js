
var background = document.getElementById('background');
var theCSSprop = window.getComputedStyle(background, null).height;
var figure = document.getElementById('figure');

if (figure.style.height !== undefined || null) {
    console.log('La valeur est bien égal à zéro ou n\'existe pas');
    figure.setAttribute('style', 'height:' + theCSSprop);
}
