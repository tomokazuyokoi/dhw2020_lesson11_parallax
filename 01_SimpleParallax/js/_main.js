// var images = document.getElementsByClassName('parallax');
var images = document.querySelectorAll('.parallax');
new simpleParallax(images, {
    delay: 1,
    orientation: 'down',
    scale: 1.3,
});

var images2 = document.querySelectorAll('.parallax2');
new simpleParallax(images2, {
    delay: 1,
    orientation: 'right',
    scale: 1.3,
});