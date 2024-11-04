// Smooth scrolling for navigation links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navbar Toggle
const navbar = document.querySelector('.navbar');
const menuToggleBtn = document.createElement('button');
menuToggleBtn.classList.add('menu-toggle');
menuToggleBtn.innerHTML = '<i class="bx bx-menu"></i>';
navbar.appendChild(menuToggleBtn);

menuToggleBtn.addEventListener('click', () => {
    const ul = document.querySelector('.navbar ul');
    ul.classList.toggle('active');
});
