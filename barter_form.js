const targetItemName = "Vintage Guitar";
document.getElementById("targetItemName").textContent = targetItemName;

const form = document.getElementById("barterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  formData.append("requestedItem", targetItemName);

  console.log("=== Barter Proposal Submitted ===");
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  alert("Your barter proposal has been submitted!");
  form.reset();
});
