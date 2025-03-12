const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation
document.querySelector('form').addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if (!name || !email) {
        event.preventDefault();
        alert('Please fill in all required fields.');
    }
});
