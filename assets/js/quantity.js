
document.addEventListener("DOMContentLoaded", function () {

    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");

    decreaseBtn.addEventListener("click", function () {
        let qty = parseInt(quantityInput.value);
        if (qty > 1) {
            quantityInput.value = qty - 1;
        }
    });

    increaseBtn.addEventListener("click", function () {
        let qty = parseInt(quantityInput.value);
        if (qty < 10) {
            quantityInput.value = qty + 1;
        }
    });
});
