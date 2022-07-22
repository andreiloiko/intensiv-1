const headerNavBtn = document.querySelector('.header__nav-btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation_open');
});

headerNavigation.addEventListener('click', ({target}) => {
    if (target.classList.contains('navigation__list')){
        headerNavigation.classList.remove('header__navigation_open');
    }
})