let btn = document.getElementById('mobile-menu-button');
let menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    // menu.classList.add('transition', 'duration-500');
    menu.classList.toggle('hidden');
});