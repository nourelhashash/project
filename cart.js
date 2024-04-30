
// header Start 
document.addEventListener('DOMContentLoaded', function () {
    const categoriesLink = document.getElementById('categories-link');
    const categoriesMenu = document.getElementById('categories-menu');
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const titleColor = document.querySelector('#cart .title');

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

const isDarkMode = localStorage.getItem('darkMode') === 'true';
const body = document.body;

if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleDarkMode();
}

function toggleDarkMode() {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    if (isDarkMode) {
        document.documentElement.style.setProperty('--green-color', '#000000');
        document.documentElement.style.setProperty('--light-green-color', '#fff');
        document.documentElement.style.setProperty('--orange-color', '#3cb815');
        document.documentElement.style.setProperty('--body-color', '#000');
        document.documentElement.style.setProperty('--container-color', 'rgba(255, 255, 255, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#d3d3d3');
        document.documentElement.style.setProperty('--title-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--green-color', '#007f5f');
        document.documentElement.style.setProperty('--light-green-color', 'rgb(235, 247, 237)');
        document.documentElement.style.setProperty('--orange-color', '#ff7e00');
        document.documentElement.style.setProperty('--body-color', '#fff');
        document.documentElement.style.setProperty('--container-color', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#fef4ea');
        document.documentElement.style.setProperty('--title-color', '#000');
    }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
// header End 


/* Cart Start*/
var h_3Product = document.querySelectorAll('.h_3');

h_3Product.forEach(
    function(h3) {
        h3.onclick = function() {
            h3.style.color = 'red';
            h3.style.fontSize = '25px';
        };
    }
);
/* Cart End*/

