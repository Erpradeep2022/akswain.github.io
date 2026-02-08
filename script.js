// Update year in footer
document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  const yearElements = document.querySelectorAll('#y');
  yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.menu a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage === 'index.html' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
