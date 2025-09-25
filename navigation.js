(function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navbar) {
    return;
  }

  const closeMenu = () => {
    if (hamburger) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    if (navMenu) {
      navMenu.classList.remove('active');
    }
  };

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isExpanded));
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (navMenu && navMenu.classList.contains('active')) {
        closeMenu();
      }

      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          navLinks.forEach((navLink) => navLink.classList.remove('active'));
          link.classList.add('active');
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const updateNavbarState = () => {
    if (window.scrollY > 12) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  updateNavbarState();
  window.addEventListener('scroll', updateNavbarState);
})();
