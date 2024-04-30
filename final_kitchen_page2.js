const product = [
    {
        "id": 1,
        "name": "SNW fin duster",
        "price": 78,
        "image": "images kitchen/pic1.jpg"
    },
    {
        "id": 2,
        "name": "Slotted spoon with strainer",
        "price": 60,
        "image": "images kitchen/pic2.jpg"
    },
    {
        "id": 3,
        "name": "SLN silicone strainer",
        "price": 66,
        "image": "images kitchen/pic3.jpg"
    },
    {
        "id": 4,
        "name": "Silicone gloves",
        "price": 98,
        "image": "images kitchen/pic4.jpg"
    },
    {
        "id": 5,
        "name": "Ziata",
        "price": 132,
        "image": "images kitchen/pic5.jpg"
    },
    {
        "id": 6,
        "name": "Lux cream bag",
        "price": 88,
        "image": "images kitchen/pic6.jpg"
    },
    {
        "id": 7,
        "name": "Egg carrier",
        "price": 58,
        "image": "images kitchen/pic7.jpg"
    },
    {
        "id": 8,
        "name": "Bowl of mixture",
        "price": 132,
        "image": "images kitchen/pic8.jpg"
    },
    {
        "id": 9,
        "name": "Food storage container",
        "price": 78,
        "image": "images kitchen/pic9.jpg"
    },
    {
        "id": 10,
        "name": "slotted spoon",
        "price": 98,
        "image": "images kitchen/pic10.jpg"
    },
    {
        "id": 11,
        "name": "salt and pepper shakers",
        "price": 238,
        "image": "images kitchen/pic11.jpg"
    },
    {
        "id": 12,
        "name": "salt and pepper shakers",
        "price": 218,
        "image": "images kitchen/pic12.jpg"
    },
    {
        "id": 13,
        "name": "Turkish spoons set",
        "price": 12199,
        "image": "images kitchen/pic13.jpg"
    },
    {
        "id": 14,
        "name": "Diecast granite set",
        "price": 9999,
        "image": "images kitchen/pic14.jpg"
    },
    {
        "id": 15,
        "name": "Square granite cookware set",
        "price": 11099,
        "image": "images kitchen/pic15.jpg"
    },
    {
        "id": 16,
        "name": "Glass seasoning set",
        "price": 696,
        "image": "images kitchen/pic16.jpg"
    },
    {
        "id": 17,
        "name": "Stainless distribution kit",
        "price": 1355,
        "image": "images kitchen/pic17.jpg"
    },
    {
        "id": 18,
        "name": "Karaga spoon bag",
        "price": 9377,
        "image": "images kitchen/pic18.jpg"
    },
    {
        "id": 19,
        "name": "Glass jar",
        "price": 406,
        "image": "images kitchen/pic19.jpg"
    },
    {
        "id": 20,
        "name": "Tart plate",
        "price": 203,
        "image": "images kitchen/pic20.jpg"
    },
    {
        "id": 21,
        "name": "Box for preserving legumes",
        "price": 127,
        "image": "images kitchen/pic21.jpg"
    },
    {
        "id": 22,
        "name": "Color chair",
        "price": 405,
        "image": "images kitchen/pic22.jpg"
    }
]
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
        document.documentElement.style.setProperty('--body-color', 'url("5-Tips-To-Make-Your-Black-Themed-Kitchen-Stand-Out-1.jpg")');
        document.documentElement.style.setProperty('--container-color', 'rgba(255, 255, 255, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#d3d3d3');
    } else {
        document.documentElement.style.setProperty('--green-color', '#3cb815');
        document.documentElement.style.setProperty('--light-green-color', 'rgb(235, 247, 237)');
        document.documentElement.style.setProperty('--orange-color', '#ff7e00');
        document.documentElement.style.setProperty('--body-color', 'url("light-grey-kitchen-with-black-hardware-obk22-l20-1.jpg")');
        document.documentElement.style.setProperty('--container-color', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#fef4ea');
    }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

const categories = [...new Set(product.map((item) => item.name.toLowerCase()))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return item.includes(searchData);
    });
    displayItem(filterData);
});

const displayItem = (items) => {
    document.getElementById('listProduct').innerHTML = items.map((item) => {
        const { image, name, price } = product.find((prod) => prod.name.toLowerCase() === item);
        return (
            `<div class="item">
                <img src="${image}" alt="product">
                <h2>${name}</h2>
                <div class="price">${price}LE</div>
                <a href="#cart-page"><button class="addCart">Add To Cart</button></a>
            </div>`
        );
    }).join('');
};

displayItem(categories);
