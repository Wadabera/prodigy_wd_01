// Select the navbar and the toggle button
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");

// Add event listener for scrolling to change navbar background color
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Add event listener for toggle button to show/hide the mobile menu
navToggle.addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
});
