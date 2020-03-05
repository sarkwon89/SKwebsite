//Materialize js

$(document).ready(function () {
    $('.sidenav').sidenav();
});




function animated(element, animation){
    $(element).addClass('animated ' + animation)
}

$("#enter").click(function(){
    animated(".aboutmeheader", "fadeInLeft");
    animated(".aboutmeheader2", "fadeInRight");
    animated(".nav-wrapper", "fadeInDown");
})

$("#aboutme").click(function(){
    animated(".aboutmeheader", "fadeInLeft");
    animated(".aboutmeheader2", "fadeInRight");
    animated(".nav-wrapper", "fadeInDown");
})

$("#product").click(function(){
    animated(".productheader","fadeInLeft");
    animated(".productinfo", "fadeInRight")
})

$("#project").click(function(){
    animated(".projectheader","fadeInLeft");
    animated(".projectinfo", "fadeInRight")
})

$("#commsec").click(function(){
    animated(".commercialheader","fadeInLeft");
    animated(".commercialinfo", "fadeInRight")
})