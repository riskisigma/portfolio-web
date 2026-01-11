
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});