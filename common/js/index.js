$('.menuBar').on('click',()=>{
    $('aside').slideToggle();
});

$('.arrowDown1').on('click',()=>{
    $('.downItems1').slideToggle();
});

const arrow=document.querySelector('.arrowDown');
arrow.addEventListener('click',()=>{
    arrow.classList.toggle('rotate');
})