
//let currentHeight = document.documentElement.clientHeight;
//let scrollHeight = document.documentElement.scrollHeight;
//console.log(currentHeight);
//console.log(scrollHeight);

let lastScroll = 0;
const defaultOffset = document.documentElement.clientHeight;
const header = document.querySelector('.header');
const text = document.querySelectorAll('.menu__link');
const menuBurger = document.querySelector('.icon-menu');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('__scroll-on');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('__scroll-on');
        menuBurger.classList.remove('icon-menu');
        menuBurger.classList.add('menu__black');


        for (let elem of text) {
          elem.classList.add('__black')
        }
       
    }
    else if(scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset){
        //scroll up
        header.classList.remove('__scroll-on');
        menuBurger.classList.add('icon-menu');
        menuBurger.classList.remove('menu__black');
        for (let elem of text) {
          elem.classList.remove('__black')
        }
    }

    lastScroll = scrollPosition();
})