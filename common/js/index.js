$('.menuBar').on('click',()=>{
    $('aside').slideToggle();
});

$('.arrowDown1').on('click',()=>{
    $('.downItems1').slideToggle();
});

$('.arrowDown2').on('click',()=>{
    $('.downItems2').slideToggle();
});

$('.arrowDown3').on('click',()=>{
    $('.downItems3').slideToggle();
});

$('.arrowDown4').on('click',()=>{
    $('.downItems4').slideToggle();
});

const arrow=document.querySelectorAll('.arrowDown');
arrow.forEach(function(btns){
    btns.addEventListener('click',()=>{
        btns.classList.toggle('rotate')
    });
})