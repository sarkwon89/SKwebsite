//Materialize functions
$(document).ready(function () {
    $('.sidenav').sidenav();
});


//animate.css functions


$(function(){
    $('#enter').click(function(){
        animate('#aboutmeheader', 'fadeInLeft')

    })
    return false;
})


function animate(element, animation) {
    $(element).addClass('animated ' + animation);
    var wait = setTimeout(function() {
            $(element).removeClass(`animated ` + animation);
        },
        1000);
    }