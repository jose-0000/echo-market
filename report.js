// Get the form element from HTML
const reportForm = document.getElementById('report-form');

// Add an event listener for form submission
reportForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from refreshing

    
    alert("Report submitted successfully!"); // Show confirmation message

    // Reset the form after submission
    reportForm.reset();
});
