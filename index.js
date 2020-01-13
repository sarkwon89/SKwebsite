//Materialize js

$(document).ready(function () {
    $('.sidenav').sidenav();
});


$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

function animted(element, animation){
    $(element).addClass('animated ' + animation)
}

$("#enter").click(function(){
    animted(".aboutmeheader", "fadeInLeft");
    animted(".aboutmeheader2", "fadeInRight");
    animted(".nav-wrapper", "fadeInDown");
})