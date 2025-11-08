
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('date').textContent = new Date(document.lastModified).toLocaleDateString();


const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('#primarynav');

hambutton.addEventListener('click', toggleMenu);

function toggleMenu() {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
    const isOpen = mainnav.classList.contains('open');
    hambutton.innerHTML = isOpen ? '&#10006;' : '&#9776;'; 
}