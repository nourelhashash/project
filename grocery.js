document.addEventListener('DOMContentLoaded', function () {
    const categoriesLink = document.getElementById('categories-link');
    const categoriesMenu = document.getElementById('categories-menu');
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    categoriesLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Check if the media query is active
        if (window.matchMedia("(max-width: 852px)").matches) {
            // If media query is active, explicitly set display to block
            categoriesMenu.style.display = 'block';
        } else {
            // If media query is not active, toggle display as before
            categoriesMenu.style.display = categoriesMenu.style.display === 'block' ? 'none' : 'block';
        }
    });

    menu.addEventListener('click', function () {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        // Hide categories menu when menu icon is clicked
        categoriesMenu.style.display = 'none';
    });

    window.addEventListener('scroll', function () {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});