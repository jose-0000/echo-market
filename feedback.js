// Get the form element
const feedbackForm = document.getElementById('feedback-form');

// Add event listener for form submission
feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh


    
    alert("Feedback submitted successfully!"); // Show confirmation

    // Reset the form after submission
    feedbackForm.reset();
});
