// Hamburger-Menü
const menuBtn = document.getElementById("menuBtn");
const menuList = document.querySelector("#menu ul");

menuBtn.addEventListener("click", () => {
    menuList.style.display = (menuList.style.display === "block") ? "none" : "block";
});

// Bottom Navigation Buttons
const bottomBtns = document.querySelectorAll(".bottom-btn");
const sections = {
    home: document.getElementById("home"),
    teamOverview: document.getElementById("teamOverview"),
    teamsSection: document.getElementById("teamsSection"),
    tableSection: document.getElementById("tableSection"),
    statsSection: document.getElementById("statsSection")
};

bottomBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        // Aktive Button markieren
        bottomBtns.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        // Richtige Section anzeigen
        for (let key in sections) { sections[key].style.display = (key===btn.dataset.section)?"block":"none"; }
        // Hamburger schließen falls offen
        menuList.style.display = "none";
    });
});

// Mannschaftsauswahl
const teamBtns = document.querySelectorAll(".team-btn");
const teamNameHeader = document.getElementById("teamName");
const backBtn = document.getElementById("backBtn");

teamBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        sections.teamsSection.style.display="block";
        sections.teamOverview.style.display="none";
        teamNameHeader.textContent = btn.textContent;
    });
});
backBtn.addEventListener("click", ()=>{
    sections.teamOverview.style.display="block";
    sections.teamsSection.style.display="none";
});

// Tabs wechseln
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        tabBtns.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        tabContents.forEach(c=>c.style.display = (c.id===btn.dataset.tab)?"block":"none");
    });
});

// Akkordeon
const accordions = document.querySelectorAll(".accordion-header");
accordions.forEach(header=>{
    header.addEventListener("click", ()=>{
        const content = header.nextElementSibling;
        const toggle = header.querySelector(".toggle");
        if(content.style.display==="block"){ content.style.display="none"; toggle.textContent="+"; }
        else{ content.style.display="block"; toggle.textContent="-"; }
    });
});

// Spielerprofil Modal
const modal = document.getElementById("playerModal");
const modalImg = modal.querySelector(".player-img");
const modalName = modal.querySelector(".player-name");
const modalAccordions = modal.querySelectorAll(".accordion-item .accordion-content");
const modalToggles = modal.querySelectorAll(".accordion-item .accordion-header .toggle");

const players = document.querySelectorAll(".player");
players.forEach(player=>{
    player.addEventListener("click", ()=>{
        modalName.textContent = player.dataset.name;
        modalImg.src = "platzhalter.png";
        modalAccordions.forEach(c=>c.style.display="none");
        modalToggles.forEach(t=>t.textContent="+");
        modal.style.display="block";
    });
});

modal.querySelector(".close").addEventListener("click", ()=>modal.style.display="none");
window.addEventListener("click", e=>{ if(e.target===modal) modal.style.display="none"; });
