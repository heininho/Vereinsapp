
// Hauptmenü öffnen/schließen
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Plus-Minus-Funktion für Untermenüs
const toggles = document.querySelectorAll('.menu-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenu = toggle.nextElementSibling;
    const symbol = toggle.querySelector('.symbol');
    
    submenu.classList.toggle('active');
    if (submenu.classList.contains('active')) {
      symbol.textContent = '−'; // Minus
    } else {
      symbol.textContent = '+'; // Plus
    }
  });
});
