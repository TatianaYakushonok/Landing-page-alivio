const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNaIcon = document.querySelector('.mobile-nav-button__icon');
const headerNav = document.querySelector('.header-nav');
const headerButton = document.querySelector('.header-button');

mobileNavButton.addEventListener('click', function() {
    mobileNaIcon.classList.toggle('active');

    if(headerNav.classList.contains('active')) {
        headerNav.classList.remove('active');
    } else {
        headerNav.classList.add('active');
    }
    
    if(headerButton.classList.contains('active')) {
        headerButton.classList.remove('active');
    } else {
        headerButton.classList.add('active');
    }
})