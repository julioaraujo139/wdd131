document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("hamburger");

    hamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        hamburgerBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
    });
});
