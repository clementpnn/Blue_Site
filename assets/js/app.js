const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('.list-nav');
const body = document.querySelector('.body-left');
const logo = document.querySelector('.logo');


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active');
})

const allLinks = document.querySelectorAll('.items-nav');

allLinks.forEach(item => {

    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })

})