const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');
let menuOpen = false;

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    console.log('Navbar classes:', navbar.classList);
});

// document.addEventListener('click', (event) => {
//     if (!navbar.contains(event.target) && event.target !== menuButton) {
//         navbar.classList.remove('active');
//     }
// });