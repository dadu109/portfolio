const projects = [
    {name: 'AKTRADE<br>WIZYTÓWKA', imgSrc: 'hero.jpg'},
    {name: 'ZADANIA<br>DOMOWE', imgSrc: 'hero.jpg'},
    {name: 'GRA<br>SAPER', imgSrc: 'saper.png'},
];

const carousel = ({container,noSlides,slide,img,imgWrapper,outline,name,prev,next,array}) => {

    let activeSlide = 0;
    let touchstartY = 0;
    let touchendY = 0;
    const switchTlUp = gsap.timeline({paused:true});
    const switchTlDown = gsap.timeline();

    const update = () => {
        slide.innerHTML = (activeSlide+1)<10?`0${activeSlide+1}`:activeSlide+1;
        noSlides.innerHTML = array.length<10?`0${array.length}`:array.length;
        img.src = array[activeSlide].imgSrc;
        name.innerHTML = array[activeSlide].name;
        outline.innerHTML = array[activeSlide].name;
        prev.innerHTML=array[activeSlide-1]?array[activeSlide-1].name:array[array.length-1].name;
        next.innerHTML=array[activeSlide+1]?array[activeSlide+1].name:array[0].name
    };

    update();


    switchTlDown
        .to(imgWrapper,0.3,{ease: "circ.out",opacity:0,x:'10%',skewType: "simple",skewX: -10})
        .fromTo(next,{y:-500},{ease: "circ.out",duration: .3,y:0},'-=.3')
        .fromTo(name,{y:-500},{ease: "circ.out",duration: .3,y:0}, '-=.3')
        .fromTo(outline,{y:-500},{ease: "circ.out",duration: .3,y:0}, '-=.3')
        .fromTo(prev,{y:-500},{ease: "circ.out",duration: .3,y:0},'-=.3')
        .to(imgWrapper,0.2,{ease: "circ.out",delay:.5,opacity:1,x:0,skewType: "simple",skewX: 0});

    switchTlUp
        .to(imgWrapper,0.3,{ease: "circ.out",opacity:0,x:'10%',skewType: "simple",skewX: -10})
        .fromTo(next,{y:500},{ease: "circ.out",duration: .3,y:0},'-=.3')
        .fromTo(name,{y:500},{ease: "circ.out",duration: .3,y:0}, '-=.3')
        .fromTo(outline,{y:500},{ease: "circ.out",duration: .3,y:0}, '-=.3')
        .fromTo(prev,{y:500},{ease: "circ.out",duration: .3,y:0},'-=.3')
        .to(imgWrapper,0.2,{ease: "circ.out",delay:.5,opacity:1,x:0,skewType: "simple",skewX: 0});


    container.addEventListener('wheel',(e)=>{
        if(e.deltaY<0){
            if(activeSlide!==0){
                switchTlDown.play(0);
                activeSlide--
            }else{
                switchTlDown.play(0);
                activeSlide=array.length-1;
            }
        }else{
            if(activeSlide!==array.length-1){
                switchTlUp.play(0);
                activeSlide++
            }else{
                switchTlUp.play(0);
                activeSlide=0;
            }
        };
        update();
    });
    container.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    container.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            if(activeSlide!==array.length-1){
                switchTlUp.play(0);
                activeSlide++
            }else{
                switchTlUp.play(0);
                activeSlide=0;
            }
        }else if (touchendY > touchstartY) {
            if(activeSlide!==0){
                switchTlDown.play(0);
                activeSlide--
            }else{
                switchTlDown.play(0);
                activeSlide=array.length-1;
            }
        }
        update();
    }, false);

    prev.addEventListener('click',()=>{
        if(activeSlide!==0){
            switchTlDown.play(0);
            activeSlide--
        }else{
            switchTlDown.play(0);
            activeSlide=array.length-1;
        }
        update();
    });

    next.addEventListener('click',()=>{
        if(activeSlide!==array.length-1){
            switchTlUp.play(0);
            activeSlide++
        }else{
            switchTlUp.play(0);
            activeSlide=0;
        }
        update();
    });
};

carousel({
    container:document.querySelector('.carousel'),
    noSlides:document.querySelector('.carousel .slice-count__no-slides'),
    slide:document.querySelector('.carousel .slide-count__current-slide'),
    imgWrapper:document.querySelector('.carousel .active-slide__image-wrapper'),
    img:document.querySelector('.carousel .active-slide__image'),
    outline:document.querySelector('.carousel .active-slide__text--outline'),
    name:document.querySelector('.carousel .active-slide__text--title'),
    prev:document.querySelector('.carousel .queue-slide--top'),
    next:document.querySelector('.carousel .queue-slide--bot'),
    array:projects,
});