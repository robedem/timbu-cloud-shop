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