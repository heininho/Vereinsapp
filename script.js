// Hamburger Menü
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const ul = menu.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
});

document.querySelectorAll("#menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.querySelector("ul").style.display = "none";
    });
});

// Sektionen
const home = document.getElementById("home");
const teamOverview = document.getElementById("teamOverview");
const teamsSection = document.getElementById("teamsSection");
const tableSection = document.getElementById("tableSection");
const statsSection = document.getElementById("statsSection");
const teamName = document.getElementById("teamName");
const backBtn = document.getElementById("backBtn");

document.getElementById("teamsMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamOverview.style.display = "block";
    teamsSection.style.display = "none";
    tableSection.style.display = "none";
    statsSection.style.display = "none";
});

document.getElementById("tableMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamOverview.style.display = "none";
    teamsSection.style.display = "none";
    tableSection.style.display = "block";
    statsSection.style.display = "none";
});

document.getElementById("statsMenu").addEventListener("click", () => {
    home.style.display = "none";
    teamOverview.style.display = "none";
    teamsSection.style.display = "none";
    tableSection.style.display = "none";
    statsSection.style.display = "block";
});

// Mannschaft auswählen
document.querySelectorAll(".team-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        teamName.textContent = btn.textContent;
        teamOverview.style.display = "none";
        teamsSection.style.display = "block";
    });
});

// Zurück
backBtn.addEventListener("click", () => {
    teamsSection.style.display = "none";
    teamOverview.style.display = "block";
});

// Tabs
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

// Akkordeon
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click
