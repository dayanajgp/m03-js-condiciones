// Requerimiento 1
const imagen = document.querySelector("#imagen");

imagen.addEventListener("click", function () {
    if (imagen.style.border === "2px solid red") {
        imagen.style.border = "none";
    } else {
        imagen.style.border = "2px solid red";
    }
});

// Requerimiento 2
const sticker1 = document.querySelector("#sticker1");
const sticker2 = document.querySelector("#sticker2");
const sticker3 = document.querySelector("#sticker3");
const botonStickers = document.querySelector("#verificar-stickers");
const resultadoStickers = document.querySelector("#resultado-stickers");

botonStickers.addEventListener("click", function () {
    const cantidad1 = Number(sticker1.value);
    const cantidad2 = Number(sticker2.value);
    const cantidad3 = Number(sticker3.value);
    const total = cantidad1 + cantidad2 + cantidad3;

    if (total <= 10) {
        resultadoStickers.innerHTML = "Llevas " + total + " stickers";
    } else {
        resultadoStickers.innerHTML = "Llevas demasiados stickers";
    }
});

// Requerimiento 3
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const botonIngresar = document.querySelector("#ingresar");
const resultadoPassword = document.querySelector("#resultado-password");

botonIngresar.addEventListener("click", function () {
    const password1 = select1.value;
    const password2 = select2.value;
    const password3 = select3.value;

    if (password1 === "9" && password2 === "1" && password3 === "1") {
        resultadoPassword.innerHTML = "password 1 correcto";
    } else if (password1 === "7" && password2 === "1" && password3 === "4") {
        resultadoPassword.innerHTML = "password 2 es correcto";
    } else {
        resultadoPassword.innerHTML = "password incorrecto";
    }
});
