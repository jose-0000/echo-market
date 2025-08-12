document.getElementById("announcementForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const announcement = {
        title: document.getElementById("title").value,
        message: document.getElementById("message").value,
        date: new Date().toLocaleString()
    };

    let announcements = JSON.parse(localStorage.getItem("communityAnnouncements")) || [];
    announcements.push(announcement);
    localStorage.setItem("communityAnnouncements", JSON.stringify(announcements));

    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";

    this.reset();

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});
