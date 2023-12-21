const formu = document.querySelectorAll(".formulario2");
const botonSwitch = document.querySelector(".toggle-input"); // Cambiado a ".toggle-input" en lugar de "#toggle"

botonSwitch.addEventListener("change", function () {
    if (botonSwitch.checked) {
        formu.forEach(inputs2 => inputs2.style.display = "flex");
    } else {
        formu.forEach(inputs2 => inputs2.style.display = "none");
    }
});
     