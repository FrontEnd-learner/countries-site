//   DARK MODE qo'shish
const elDarkModeButton = document.querySelector('.site-dark-mode')

elDarkModeButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.header.classList.add('dark-mode');
});