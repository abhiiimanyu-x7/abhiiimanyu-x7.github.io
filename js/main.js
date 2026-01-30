// Typewriter Effect
const words = ["Machine Learning Models.", "DevOps Architectures.", "AI Search Agents.", "Scalable Systems."];
let i = 0, j = 0, isDeleting = false;

function type() {
    const current = words[i];
    document.getElementById("typewriter").textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
    
    let speed = isDeleting ? 100 : 200;
    if (!isDeleting && j === current.length) { isDeleting = true; speed = 2000; }
    else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % words.length; speed = 500; }
    setTimeout(type, speed);
}

// Theme Toggle
function toggleTheme() {
    const root = document.getElementById('body-root');
    root.classList.toggle('bg-slate-950');
    root.classList.toggle('bg-slate-50');
    root.classList.toggle('text-slate-200');
    root.classList.add('light-mode'); // Optional class for light mode styling
}

document.addEventListener("DOMContentLoaded", type);
// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Change to 'Close' icon (X)
        icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    } else {
        menu.classList.add('hidden');
        // Change back to 'Hamburger' icon
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
}