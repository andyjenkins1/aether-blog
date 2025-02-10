document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const header = document.querySelector('.site-header');

    // Debug lines (commented out)
    // console.log('Theme toggle script loaded.');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    // console.log('Saved theme:', savedTheme);

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    // Theme toggle button event listener
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
            // console.log('Dark mode enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
            // console.log('Light mode enabled');
        }
    });

    // Scroll event to adjust header transparency
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Apply correct class on load
    handleScroll();

    // Apply class on scroll
    window.addEventListener('scroll', handleScroll);
});