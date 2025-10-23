const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const ul = menu.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
});
