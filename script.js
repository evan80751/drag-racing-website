document.addEventListener('DOMContentLoaded', function() {

  // Show current date
  const dateDisplay = document.querySelector('.current-date');
  if (dateDisplay) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = today.toLocaleDateString('en-US', options);
  }

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const menuDropdown = document.querySelector('.menu-dropdown');

  if (hamburger && menuDropdown) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      menuDropdown.classList.toggle('show');
    });
    // Close menu if clicked outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !menuDropdown.contains(e.target)) {
        hamburger.classList.remove('active');
        menuDropdown.classList.remove('show');
      }
    });
    // Close menu with escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuDropdown.classList.contains('show')) {
        hamburger.classList.remove('active');
        menuDropdown.classList.remove('show');
      }
    });
  }

  // Dark mode
  const darkModeBtn = document.querySelector('.dark-mode-toggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (darkModeBtn) {
      darkModeBtn.textContent = 'Light Mode';
    }
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      // Save preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeBtn.textContent = 'Light Mode';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeBtn.textContent = 'Dark Mode';
      }
    });
  }

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '&uarr;';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Nav link click effect
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  });

  // Image zoom on hover
  const carImages = document.querySelectorAll('.car-showcase img, .track-info img');
  carImages.forEach(img => {
    img.style.transition = 'transform 0.3s ease';

    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

});
