
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    botao.classList.toggle("ativo");

    if (botao.classList.contains("ativo")) {
        botao.textContent = "Ativado!";
    } else {
        botao.textContent = "Clique aqui";
    }
});
