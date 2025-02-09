document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  } else {
      document.body.classList.remove('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  }

  // Toggle dark mode on button click
  toggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

      // Update the icon based on the current mode
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          localStorage.setItem('theme', 'dark'); // Save the preference
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          localStorage.setItem('theme', 'light'); // Save the preference
      }
  });
});