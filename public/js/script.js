// harmburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('tampilkan');
});

navMenu.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('tampilkan');
});

const hiddenButton = document.querySelector('#show-hide');
const nextPages = document.querySelector('#nextpage');
const buttonNext = document.querySelector('#buttonnext');
const menuSlide = document.querySelector('.menuSlide');

hiddenButton.addEventListener('click', function(){
    nextPages.classList.toggle('hidden');
    buttonNext.classList.add('hidden');
    hiddenButton.classList.add('hidden');
    menuSlide.classList.remove('hidden');
});

const menuS = document.querySelector('#menus');
const circleMenu = document.querySelector('#circleMenus');

menuS.addEventListener('click', function(){
    menuS.classList.toggle('showMenus');
    circleMenu.classList.toggle('showcircle');
})

circleMenu.addEventListener('click', function(){
    menuS.classList.toggle('showMenus');
    circleMenu.classList.toggle('showcircle');
});