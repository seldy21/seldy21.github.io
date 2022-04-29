const root=document.querySelector('#root');
function common(){
    return(
        `<header>
            <span class="menuBar">메뉴</span>
            <h1>
                <a href="/">솜이의 TIL <span>(Today I Learned!)</span>🥰</a>
            </h1>
        </header>
        <aside>
            <ul class="sideMenu">
                <li class="sideContents sideContents3">
                    <div class="contTtle">
                        <span>ES6</span>
                        <div class="arrowDown arrowDown3"></div>
                    </div>
                        <ul class="downItems downItems3">
                            <li><a href="/pages/220414/toggle.html">toggle</a></li>
                            <li><a href="/pages/220420/onEvent.html">javascript event</a></li>
                            <li><a href="/pages/220424/commonLayout.html">공통 레이아웃 만들기</a></li>
                            <li><a href="/pages/220426/YTPlayer.html">YTPlayer 제어</a></li>
                            <li><a href="/pages/220429/class.html">class 문법</a></li>
                        </ul>
                </li>
                <li class="sideContents sideContents2">
                    <div class="contTtle">
                        <span>react</span>
                        <div class="arrowDown arrowDown2"></div>
                    </div>
                    <ul class="downItems downItems2">
                        <li><a href="/pages/220414/reactStart.html">리액트를 시작하며</a></li>
                        <li><a href="/pages/220415/reactOne.html">리액트 설치하기</a></li>
                        <li><a href="/pages/220416/reactTwo.html">리액트 수정·배포</a></li>
                        <li><a href="/pages/220416/reactThree.html">사용자정의태그 component</a></li>
                        <li><a href="/pages/220417/reactFour.html">속성 PROPS</a></li>
                        <li><a href="/pages/220418/reactFive.html">이벤트</a></li>
                        <li><a href="/pages/220419/reactSix.html">useState</a></li>
                        <li><a href="/pages/220420/reactSeven.html">Create 1</a></li>
                        <li><a href="/pages/220422/reactEight.html">Create 2</a></li>
                        <li><a href="/pages/220423/reactNine.html">Update 1</a></li>
                    </ul>
                </li>
                <li class="sideContents sideContents4">
                    <div class="contTtle">
                        <span>CSS</span>
                        <div class="arrowDown arrowDown4"></div>
                    </div>
                    <ul class="downItems downItems4">
                        <li><a href="/pages/220414/fontello.html">fontello 아이콘 연결하기</a></li>
                    </ul>
                </li>
                <li class="sideContents">
                    <div class="contTtle">
                        <span>git</span>
                        <div class="arrowDown arrowDown1"></div></div>
                    <ul class="downItems downItems1">
                        <li><a href="/pages/220413/gitblog.html">기술블로그 만들기</a></li>
                    </ul>
                </li>
                <li class="sideContents sideContents5">
                    <div class="contTtle">
                        <span>etc.</span>
                        <div class="arrowDown arrowDown5"></div>
                    </div>
                    <ul class="downItems downItems5">
                        <li><a href="/pages/220416/siteURL.html">유용한 사이트</a></li>
                    </ul>
                </li>
            </ul>
        </aside>`
    )
};
root.insertAdjacentHTML('beforeend',common());

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

$('.arrowDown5').on('click',(function(){
    $('.downItems5').slideToggle(300);
}));

const arrow=document.querySelectorAll('.arrowDown');
arrow.forEach(function(btns){
    btns.addEventListener('click',()=>{
        btns.classList.toggle('rotate')
    });
})