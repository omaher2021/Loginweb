document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    // Check if the loginForm element exists (only on index.html)
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            // Simple validation/mock login
            if (username && password) {
                // 1. Show Welcome Popup
                alert(`Welcome, ${username}! You are successfully logged in.`);

                // 2. Save the username to local storage
                localStorage.setItem('loggedInUsername', username);

                // 3. REDIRECT to the new Home Page
                window.location.href = 'home.html'; // Changed destination
            } else {
                alert('Please enter both a username and password.');
            }
        });
    }
});

// Added a global logout function (can be used on any page)
function logout() {
    localStorage.removeItem('loggedInUsername'); // Clear the saved user info
    // Optional: Show a goodbye alert
    alert("You have been logged out. Goodbye!");
    window.location.href = 'index.html'; // Redirect back to the login page
}