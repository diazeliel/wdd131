document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const lastModified = document.getElementById("lastModified");
    const currentYear = document.getElementById("currentyear");

    // Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
    });

    // Update footer with last modified date
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    // Update footer with current year
    currentYear.textContent = new Date().getFullYear();

    // Handle zoom responsivity (resize event listener)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navLinks.classList.remove('show');
            hamburger.textContent = '☰';
        }
    });
});