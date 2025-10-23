// Hamburger Menü
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const ul = menu.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
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
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector(".toggle");
        if (content.style.display === "block") {
            content.style.display = "none";
            toggle.textContent = "+";
        } else {
            content.style.display = "block";
            toggle.textContent = "−";
        }
    });
});

// Spielerprofil Modal
const playerModal = document.getElementById("playerModal");
const playerNameElem = playerModal.querySelector(".player-name");
const playerImg = playerModal.querySelector(".player-img");
const closeModal = playerModal.querySelector(".close");

document.querySelectorAll(".player").forEach(player => {
    player.addEventListener("click", () => {
        playerNameElem.textContent = `${player.dataset.number} ${player.dataset.name}`;
        playerImg.src = "platzhalter.png";
        playerModal.style.display = "block";

        // Reset Akkordeon im Modal
        playerModal.querySelectorAll(".accordion-content").forEach(c => c.style.display="none");
        playerModal.querySelectorAll(".accordion-header .toggle").forEach(t=>t.textContent="+");
    });
});

closeModal.addEventListener("click", () => {
    playerModal.style.display = "none";
});

// Modal schließen wenn außerhalb klicken
window.addEventListener("click", (e) => {
    if (e.target === playerModal) {
        playerModal.style.display = "none";
    }
});
