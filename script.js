document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'admin';

  if (username === hardcodedUsername && password === hardcodedPassword) {
    alert('Login successful! Redirecting to the main page...');
    window.location.href = 'welcome.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});