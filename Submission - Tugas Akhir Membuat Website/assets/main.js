const nav =  document.querySelector('#nav');

window.addEventListener('scroll', (event) =>{
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        nav.classList.remove('shadow-bottom');
    }else{
        nav.classList.add('shadow-bottom');
    }
})

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (event) =>{
    menu.classList.toggle('open');
})
