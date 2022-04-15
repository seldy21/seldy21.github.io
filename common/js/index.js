$('.menuBar').on('click',()=>{
    $('aside').slideToggle();
});

$('.arrowDown1').on('click',(function(){
    $('.downItems1').slideToggle(300);
}));

$('.arrowDown2').on('click',(function(){
    $('.downItems2').slideToggle(300);
}));

$('.arrowDown3').on('click',(function(){
    $('.downItems3').slideToggle(300);
}));

$('.arrowDown4').on('click',(function(){
    $('.downItems4').slideToggle(300);
}));

const arrow=document.querySelectorAll('.arrowDown');
arrow.forEach(function(btns){
    btns.addEventListener('click',()=>{
        btns.classList.toggle('rotate')
    });
})