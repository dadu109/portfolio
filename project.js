const imgWrapper = document.querySelector('.header__image-wrapper');
const headerLinks = document.querySelectorAll('.header__link');
const headerTitle = document.querySelector('.header__title');
const projectIntro = gsap.timeline();

projectIntro
    .from(imgWrapper,.4,{y:'-90vw'})
    .from(headerTitle,.4,{x:'-100vw'})
    .from(headerLinks[0],.4,{x:'-100vw'},'-=.2')
    .from(headerLinks[1],.4,{x:'-100vw'},'-=.1');