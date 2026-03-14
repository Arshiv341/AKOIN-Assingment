 // Nav scroll effect
      const nav = document.getElementById('mainNav');
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      });
      // Mobile menu
      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });

      function closeMobile() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
      // Intersection observer for fade-up
      const fadeEls = document.querySelectorAll('.fade-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12
      });
      fadeEls.forEach(el => observer.observe(el));
      // Form submit
      function submitForm() {
        const fname = document.getElementById('fname').value.trim();
        const email = document.getElementById('email').value.trim();
        const interest = document.getElementById('interest').value;
        if (!fname || !email || !interest) {
          alert('Please complete your name, email, and area of interest.');
          return;
        }
        document.getElementById('formContent').style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      }
      // Smooth scroll for all anchor links
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });