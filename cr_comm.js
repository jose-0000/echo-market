document.getElementById("createCommunityForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        communityName: document.getElementById("communityName").value,
        location: document.getElementById("location").value,
        communityType: document.getElementById("communityType").value,
        accessType: document.getElementById("accessType").value,
        description: document.getElementById("description").value
    };

    try {
        const res = await fetch("/api/community", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (res.ok) {
            alert("✅ Community Created!");
            document.getElementById("createCommunityForm").reset();
        } else {
            alert("❌ Error: " + data.error);
        }
    } catch (err) {
        alert("❌ Server error: " + err.message);
    }
});
