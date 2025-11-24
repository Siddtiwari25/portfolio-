// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn && menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
  // animate hamburger
  menuBtn.classList.toggle('open');
});

// close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('show');
    menuBtn.classList.remove('open');
  });
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form placeholder behaviour (front-end only)
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields before sending.');
      return;
    }
    // Placeholder: replace with fetch() to your backend or Formspree/Zapier endpoint
    alert('Thanks, ' + name + '! Message received (this is a demo).');
    document.getElementById('contact-form').reset();
  });
}

// set current year
document.getElementById('year').textContent = new Date().getFullYear();
