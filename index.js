const burger = document.querySelector('.burger');
const burgerLines = burger.querySelectorAll('.burger__line');
const introAnimation = gsap.timeline();
const burgerAnimation = gsap.timeline({paused:true});
let burgerOpen = false;

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