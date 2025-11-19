document.addEventListener("DOMContentLoaded", function () {

    // JOIN FOR FREE → Go to Courses Page
    const joinBtn = document.getElementById("joinBtn");
    if (joinBtn) {
        joinBtn.addEventListener("click", () => {
            window.location.href = "courses.html";
        });
    }

    // COURSE CARDS → Show Selected Course
    const courseCards = document.querySelectorAll(".course-card");
    if (courseCards.length > 0) {
        courseCards.forEach(card => {
            card.addEventListener("click", () => {
                const name = card.querySelector("h3").textContent;
                alert("You selected: " + name);
            });
        });
    }

    // LIGHT / DARK MODE  
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            toggle.textContent =
                document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }
});
