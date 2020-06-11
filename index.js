const cursor = document.querySelector('#cursor');
const cursorFollower = document.querySelector('#cursor-follower');
const burger = document.querySelector('.burger');
const burgerLines = burger.querySelectorAll('.burger__line');
const introAnimation = gsap.timeline();
const burgerAnimation = gsap.timeline({paused:true});
let burgerOpen = false;

let mouseX = 0, mouseY = 0;
let fxp = 0, fyp = 0;
let cxp = 0, cyp = 0;

document.addEventListener('mousemove',(e)=>{
    if(e.target.classList.contains('hover')){
        cursorFollower.classList.add('follower-hover')
    }else{
        cursorFollower.classList.remove('follower-hover')
    }
    mouseX = e.pageX;
    mouseY = e.pageY;
});

setInterval(()=>{
    fxp += ((mouseX - fxp)/6);
    fyp += ((mouseY - fyp)/6);
    cursorFollower.style.left = fxp +'px';
    cursorFollower.style.top = fyp +'px';
}, 17);
setInterval(()=>{
    cxp += ((mouseX - cxp)/6);
    cyp += ((mouseY - cyp)/6);
    cursor.style.left = cxp +'px';
    cursor.style.top = cyp +'px';
}, 1);

introAnimation
    .fromTo(
        document.querySelector('.navigation__link--github'),
        {x:-500},
        {delay:.5,duration: .3,x:0}
    )
    .fromTo(
        document.querySelector('.navigation__link--cv'),
        {x:500},
        {duration: .3,x:0},
        '-=.3'
    )
    .fromTo(
        burger,
        {x:500},
        {duration: .3,x:0},
        '-=.3'
    )
    .fromTo(
        document.querySelector('.navigation__link--logo'),
        {x:-500},
        {duration: .3,x:0},
        '-=.3'
    )
;

burgerAnimation
    .fromTo(
        document.querySelector('.burger-menu'),
        {
            duration: .3,
            skewType: "simple",
            skewX: -10,
            x:'120%',
            ease: "circ.inOut"
        },
        {skewX: 0,x:0}
    ).to(
        burgerLines[0],
    {
            duration: .2,
            x:18,
            rotate:45
        },'-=.3'
    )
    .to(
        burgerLines[1],
        {
            duration: .2,
            scale:0.2
        },'-=.3'
    )
    .to(
        burgerLines[2],
        {
            duration: .2,
            x:-18,
            rotate:-45
        },'-=.3'
    );

burger.addEventListener('click',()=>{
   if(!burgerOpen){
       burgerOpen = true;
       burgerAnimation.play();
   }else{
       burgerOpen = false;
       burgerAnimation.reverse();
   }
});