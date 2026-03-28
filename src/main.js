// Seleciona o elemento uma única vez para ser mais eficiente
const menuOculto = document.getElementById("menuOculto");

function abrirMenu() {
    if (menuOculto) {
        menuOculto.style.display = "block";
    }
}

function esconderMenu() {
    if (menuOculto) {
        menuOculto.style.display = "none";
    }
}

// Função para o botão novo (Toggle)
function toggleMenu() {
    if (menuOculto.style.display === "block") {
        esconderMenu();
    } else {
        abrirMenu();
    }
}
