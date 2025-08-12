document.getElementById("joinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const member = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        interests: document.getElementById("interests").value
    };

    let members = JSON.parse(localStorage.getItem("communityMembers")) || [];
    members.push(member);
    localStorage.setItem("communityMembers", JSON.stringify(members));

    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";

    this.reset();

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});
