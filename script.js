const addBtn = document.getElementById("addMemberBtn");
const memberList = document.getElementById("memberList");

addBtn.addEventListener("click", () => {
    const name = prompt("Name des Mitglieds:");
    if (name) {
        const li = document.createElement("li");
        li.textContent = name;
        memberList.appendChild(li);
    }
});
