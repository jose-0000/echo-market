const form = document.getElementById("listingform");
const title = document.getElementById("title");
const description = document.getElementById("description");
const images = document.getElementById("images");
const category = document.getElementById("category");
const itemcondition = document.getElementById("itemcondition");
const mode = document.getElementById("mode");
const generalLocation = document.getElementById("generalLocation");
const pickup = document.getElementById("pickup");
const community = document.getElementById("community");
const detailedLocation = document.getElementById("detailedLocation");
const expiry = document.getElementById("expiry");
const submitbtn = form.querySelector('button[type="submit"]');
const iwrapper = document.getElementById("imagewrapper");
const barterwrapper = document.getElementById("barterwrapper");
const barterinput = document.getElementById("pbarter");

function updatemode() {
  const modev = mode.value;
  if (modev == "Request") {
    iwrapper.style.display = "none";
    images.required = false;
  } else {
    iwrapper.style.display = "";
    images.required = true;
  }

  if (mode.value === "Barter") {
    barterwrapper.style.display = "";
    barterinput.required = true;
  } else {
    barterwrapper.style.display = "none";
    barterinput.required = false;
  }
}

mode.addEventListener("change", updatemode);
updatemode();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  for (let [k, v] of formData.entries()) {
    console.log(k, v);
  }
  alert("Form data logged in console! (For now, not yet sent to server)");
});
