document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            if (this.value === this.placeholder) {
                this.value = "";
            }
        });

        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.value = this.placeholder;
            }
        });

        // Initialize the input value to the placeholder
        input.value = input.placeholder;
    });
});

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