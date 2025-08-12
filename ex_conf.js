
document.getElementById('exchangeConfirmationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        confirmedItem: document.getElementById('confirmedItem').value,
        pickupAddress: document.getElementById('pickupAddress').value,
        dateTime: document.getElementById('dateTime').value,
        contactNumber: document.getElementById('contactNumber').value,
        notes: document.getElementById('notes').value
    };

    console.log("Exchange Confirmation Submitted:", formData);

    // Example backend request
    // fetch('/api/exchanges/confirm', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
});
