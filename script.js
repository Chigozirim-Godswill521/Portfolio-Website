document.addEventListener('DOMContentLoaded', function() {
  // Handle hamburger menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Toggle the menu visibility
    this.classList.toggle('active'); // Toggle the hamburger to X icon
  });

  // Handle menu item clicks for smooth scrolling
  const menuItems = document.querySelectorAll('.nav-menu a');

  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetElement = document.querySelector(targetId); // Find the target element

      // Smoothly scroll to the target element
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Close the menu after clicking
      navMenu.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    });
  });
});
