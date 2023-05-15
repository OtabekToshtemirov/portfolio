window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollTop = window.scrollY;
    console.log(scrollTop.toString());

    // If the scroll position is greater than or equal to 100px, change the background color .nav to red
    if (scrollTop >= 50) {
        document.querySelector('.nav').style.background = 'rgb(136,26,26)';
    } else {
        document.querySelector('.nav').style.background = 'linear-gradient(rgba(200, 0,0,0.7),rgba(0,0,0,0.7))';
    }
});
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.header__menu-list');
const headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

//on click nav link close nav`
const navLink = document.querySelectorAll('.header__menu-list li a');
navLink.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });

}
);


