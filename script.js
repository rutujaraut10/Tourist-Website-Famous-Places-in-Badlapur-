document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation (basic example)
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Show feedback message
    document.getElementById('feedback').style.display = 'block';

    // Reset the form
    document.getElementById('contactForm').reset();
});

