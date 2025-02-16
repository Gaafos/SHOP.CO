document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o campo de e-mail e o botão
    const emailInput = document.querySelector(".txtemail");
    const subscribeButton = document.querySelector(".email-update-right-bot button");

    // Adiciona evento de clique no botão
    subscribeButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            emailInput.focus();
        } else {
            alert("E-mail enviado! Você se inscreveu com sucesso.");
        }
    });
});
