const hamburgerBtn = document.getElementsByClassName('hamburger-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
