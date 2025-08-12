const requests = [
  { id: "req1", requester: "Anu", item: "Wooden Chair", offeredItem: "Bookshelf", message: "Can meet tomorrow evening", status: "Pending" },
  { id: "req2", requester: "Aju", item: "Laptop Bag", offeredItem: null, message: "Need this for college", status: "Pending" }
];

// Find the container div from HTML
const container = document.getElementById('requests-container');

// Function to show all requests
function renderRequests() {
  container.innerHTML = ''; // clear old data before showing new

  requests.forEach(req => { // go through each request
    const card = document.createElement('div'); // make a new <div>
    card.className = 'card'; // add CSS class

    //Contents to be displayed in the card
    card.innerHTML = `
      <p><strong>Requester:</strong> ${req.requester}</p>
      <p><strong>Item Requested:</strong> ${req.item}</p>
      <p><strong>Offered Item:</strong> ${req.offeredItem || 'N/A'}</p>
      <p><strong>Message:</strong> ${req.message}</p>
      <p class="status">Status: ${req.status}</p>
      <button class="btn btn-accept" onclick="updateStatus('${req.id}', 'Accepted')">Accept</button>
      <button class="btn btn-decline" onclick="updateStatus('${req.id}', 'Declined')">Decline</button>
      <button class="btn btn-message" onclick="messageBack('${req.id}')">Message Back</button>
    `;

    container.appendChild(card); // add the card to the page
  });
}

// Change request status when clicked
function updateStatus(id, newStatus) {
  const req = requests.find(r => r.id === id); // find request by id
  if (req) {
    req.status = newStatus; // change status
    renderRequests(); // refresh display
  }
}

// Send a message back
function messageBack(id) {
  const msg = prompt("Enter your message:"); // ask for message
  if (msg) {
    alert(`Message sent for ${id}: ${msg}`); // show confirmation
  }
}

// First time page load → show requests
renderRequests();
