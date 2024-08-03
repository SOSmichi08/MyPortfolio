
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const passwordInput = document.getElementById('password');
  const revealPasswordCheckbox = document.getElementById('revealPassword');

  revealPasswordCheckbox.addEventListener('change', function() {
      if (revealPasswordCheckbox.checked) {
          passwordInput.type = 'text';
      } else {
          passwordInput.type = 'password';
      }
  });

  loginBtn.addEventListener('click', function() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      
      if ((username === 'Employer' || username === 'employer') && password === 'EmployerOfKarl') {
          
          localStorage.setItem('loggedInUser', 'Employer');
          
          window.location.href = '../Profile/profile.html';
      } else if (username === 'Admin' && password === 'AdminOfKarl') {
          
          localStorage.setItem('loggedInUser', 'Admin');
          
          window.location.href = '../Profile/profile.html';
      } else {
          
          alert('Invalid username or password. Please try again.');
      }
  });
});
