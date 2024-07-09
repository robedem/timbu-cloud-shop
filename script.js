document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navmenu ul');
    const cancel = document.querySelector('.cancel');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        cancel.classList.toggle('active'); // Toggle cancel icon
    });

    cancel.addEventListener('click', function () {
        navMenu.classList.remove('active');
        cancel.classList.remove('active');
    });
});