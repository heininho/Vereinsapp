// Menü öffnen/schließen
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const ul = menu.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
});

// Menü nach Klick schließen
document.querySelectorAll("#menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.querySelector("ul").style.display = "none";
    });
});

// Sektionen steuern
const home = document.getElementById("home");
const teamsSection = document.getElementById("teamsSection");
const tableSection = document.getElementById("tableSection");
const statsSection = document.getElementById("statsSection");

document.getElementById("teamsMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamsSection.style.display = "block";
    tableSection.style.display = "none";
    statsSection.style.display = "none";
});

document.getElementById("tableMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamsSection.style.display = "none";
    tableSection.style.display = "block";
    statsSection.style.display = "none";
});

document.getElementById("statsMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamsSection.style.display = "none";
    tableSection.style.display = "none";
    statsSection.style.display = "block";
});

// Tabs für Kader / Trainerteam
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabContents.forEach(tc => tc.style.display = "none");
        tabButtons.forEach(b => b.classList.remove("active"));
        document.getElementById(btn.dataset.tab).style.display = "block";
        btn.classList.add("active");
    });
});
