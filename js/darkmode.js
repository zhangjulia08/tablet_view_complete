btn.addEventListener('click', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
  });
  
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }