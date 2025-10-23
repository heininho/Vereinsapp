// Hamburger-Menü
const menuBtn = document.getElementById("menuBtn");
const menuList = document.querySelector("#menu ul");

menuBtn.addEventListener("click", () => {
    menuList.style.display = (menuList.style.display === "block") ? "none" : "block";
});

// Menü automatisch schließen bei Reiter
function closeMenu() { menuList.style.display = "none"; }
document.getElementById("teamsMenu").addEventListener("click", () => { showSection("teamOverview"); closeMenu(); });
document.getElementById("tableMenu").addEventListener("click", () => { showSection("tableSection"); closeMenu(); });
document.getElementById("statsMenu").addEventListener("click", () => { showSection("statsSection"); closeMenu(); });

// Sektionen
const sections = {
    home: document.getElementById("home"),
    teamOverview: document.getElementById("teamOverview"),
    teamsSection: document.getElementById("teamsSection"),
    tableSection: document.getElementById("tableSection"),
    statsSection: document.getElementById("statsSection")
};

function showSection(id) {
    for (let key in sections) { sections[key].style.display = (key===id)?"block":"none"; }
}

// Mannschaft Auswahl
const teamBtns = document.querySelectorAll(".team-btn");
const teamNameHeader = document.getElementById("teamName");
const backBtn = document.getElementById("backBtn");

teamBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        showSection("teamsSection");
        teamNameHeader.textContent = btn.textContent;
    });
});
backBtn.addEventListener("click", ()=>showSection("teamOverview"));

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
