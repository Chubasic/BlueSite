console.log("common.js");

/*JQuery Section*/
$( document ).ready(function (){
    $(".button-collapse").sideNav();
})
$(document).ready(function () {
    $(".button-collapse-xl").sideNav();
})


$('.carousel.carousel-slider').carousel({fullWidth: true});


/*Pure JS*/
var counter = 1;

function add(){
    counter++;
    document.getElementById('counter-field').value = counter;
}

function sub() {
    if(counter <= 1){
        alert('Zero pages?');
        return;
    }else {
        counter--;
    }
    document.getElementById('counter-field').value = counter;
}