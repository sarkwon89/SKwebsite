//Materialize functions
$(document).ready(function () {
    $('.sidenav').sidenav();
});


//animate.css functions
$(document).ready(function(){
    //same behaviour with: $(window).load(function(){
    
        window.setTimeout(function(){
    
            $("#givebutton").addClass('animated bounceInUp');
    
        }, 1000);
    
    });


$(function(){
    $('#enter').click(function(){
        animate('#aboutmeheader', 'fadeInLeft')
        animate('.aboutMeContent', 'fadeInRight')
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