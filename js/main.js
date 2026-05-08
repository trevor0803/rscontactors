/* R&S Contractors - Main JS */

(function() {
  'use strict';

  // === Mobile Navigation ===
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
    });

    // Close on link click
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        toggle.classList.remove('active');
        menu.classList.remove('open');
      }
    });
  }

  // === Header Scroll Effect ===
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(17,17,17,0.98)';
      } else {
        header.style.background = 'rgba(17,17,17,0.95)';
      }
    }, { passive: true });
  }

  // === Scroll Animations ===
  const animatedEls = document.querySelectorAll(
    '.service-card, .stat-card, .value-card, .gallery-item, .service-section__grid'
  );

  if ('IntersectionObserver' in window && animatedEls.length) {
    animatedEls.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => observer.observe(el));
  }

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - navH - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // === Contact Form — open Google Form in new tab ===
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('.btn--primary');
    if (submitBtn && submitBtn.tagName === 'A') {
      // Button is already an anchor to Google Form, nothing needed
    }
  }

})();
