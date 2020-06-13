const emailInput = document.querySelector('#email');
const emailWrapper = document.querySelector('.form__input-wrapper--email');
const emailError = document.querySelector('.emailError');
const emailRegex  = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

emailInput.addEventListener('blur',e=>{
    if(!emailRegex.test(e.target.value)){
        emailError.classList.add('emailError--visible');
        emailWrapper.classList.add('form__input-wrapper--error');

    }else{
        emailError.classList.remove('emailError--visible');
        emailWrapper.classList.remove('form__input-wrapper--error');
    }
});

emailInput.addEventListener('focus',e=>{
    emailError.classList.remove('emailError--visible');
    emailWrapper.classList.remove('form__input-wrapper--error');
});