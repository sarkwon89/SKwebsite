//Materialize functions
$(document).ready(function () {
    $('.sidenav').sidenav();
});

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});


//animate.css functions

// $(function () {
//     $('#enter').click(function () {
//         animate('#aboutmeheader', 'fadeInLeft')
//         animate('.aboutMeContent', 'fadeInRight')
//     })
//     return false;
// })


function animate(element, animation) {
    $(element).addClass('animated ' + animation);
    var wait = setTimeout(function () {
            $(element).removeClass(`animated ` + animation);
        },
        1000);
};
