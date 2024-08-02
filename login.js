
document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nicNumber = document.getElementById('id').value;
            const password = document.getElementById('password').value;

            if (nicNumber === '123456789' && password === 'kaja2402') {
                window.location.href = 'profile.html'; // Redirect to profile page if credentials are correct
            } else {
                alert('Wrong NIC number or password.');
            }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Handle signup form submission
            // You might want to add validation here
            window.location.href = 'input.html'; // Redirect to input page after signup
});
