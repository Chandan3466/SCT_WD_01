// Search functionality
document.querySelector('.search-button').addEventListener('click', function () {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        alert(`Searching for programs: "${query}"`); // Replace with real search logic
    } else {
        alert('Enter a search term!');
    }
});

// Signup CTA
document.getElementById('signup-btn').addEventListener('click', function () {
    // Placeholder: Redirect to signup form
    window.location.href = 'https://example.com/signup'; // Update to your form URL
});