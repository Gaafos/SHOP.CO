document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector(".txtemail");
    const subscribeButton = document.querySelector(".email-update-right-bot button");
    subscribeButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("ERRO !!! Por favor, insira um e-mail válido.");
            emailInput.focus();
        } else {
            alert("E-mail enviado! Você se inscreveu com sucesso.");
        }
    });
});
