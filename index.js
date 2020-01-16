//Materialize js

$(document).ready(function () {
    $('.sidenav').sidenav();
});




function animted(element, animation){
    $(element).addClass('animated ' + animation)
}

$("#enter").click(function(){
    animted(".aboutmeheader", "fadeInLeft");
    animted(".aboutmeheader2", "fadeInRight");
    animted(".nav-wrapper", "fadeInDown");
})