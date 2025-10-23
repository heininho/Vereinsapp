// Menü öffnen/schließen
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const ul = menu.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
});

// Sektionen steuern
const home = document.querySelector(".logo-container");
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

// Mannschaften speichern & anzeigen
const addTeamBtn = document.getElementById("addTeamBtn");
const teamList = document.getElementById("teamList");
let teams = JSON.parse(localStorage.getItem("teams")) || [];

function renderTeams() {
    teamList.innerHTML = "";
    teams.forEach(team => {
        const li = document.createElement("li");
        li.textContent = team;
        teamList.appendChild(li);
    });
}

renderTeams();

addTeamBtn.addEventListener("click", () => {
    const team = prompt("Name der neuen Mannschaft:");
    if (team) {
        teams.push(team);
        localStorage.setItem("teams", JSON.stringify(teams));
        renderTeams();
    }
});
