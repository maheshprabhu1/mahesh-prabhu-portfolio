// Select the menu icon and the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add a click event listener to the menu icon
menuIcon.onclick = () => {
    // Toggles the 'fa-xmark' icon class to change the icon (e.g., from hamburger to X)
    menuIcon.classList.toggle('fa-xmark');
    // Toggles the 'active' class on the navbar, which triggers the CSS
    navbar.classList.toggle('active');
};