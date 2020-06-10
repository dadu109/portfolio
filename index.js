const projects = [
    {name: 'AKTRADE<br>WIZYTÓWKA', imgSrc: 'hero.jpg'},
    {name: 'ZADANIA<br>DOMOWE', imgSrc: 'hero.jpg'},
    {name: 'GRA<br>SAPER', imgSrc: 'saper.png'}
];

let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', function(event) {
    touchstartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendY < touchstartY) {
        console.log('Swiped up');
    }

    else if (touchendY > touchstartY) {
        console.log('Swiped down');
    }

    else if (touchendY === touchstartY) {
        console.log('Tap');
    }
}