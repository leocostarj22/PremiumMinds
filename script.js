// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() { 
    // Obtém referências aos elementos do menu
    const menuToggle = document.getElementById("menu-toggle"); // Botão que alterna o menu
    const sidebar = document.getElementById("sidebar"); // Barra lateral

    // Adiciona um evento de clique ao botão do menu
    menuToggle.addEventListener("click", function() {
        // Alterna a classe "show" no sidebar, exibindo ou ocultando o menu
        sidebar.classList.toggle("show");
    });
});

// Adiciona um evento ao botão de salvar
document.querySelector(".save").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário antes da validação

    // Obtém os valores dos campos de entrada do formulário
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let telephone = document.getElementById("telephone").value;

    // Cria um elemento <div> para exibir mensagens de erro ou sucesso
    let messageBox = document.createElement("div");
    messageBox.classList.add("message");

    // Adiciona a mensagem ao corpo do documento
    document.body.appendChild(messageBox); 

    // Expressão regular para validar telefone com exatamente 9 dígitos numéricos
    let phoneRegex = /^[0-9]{9}$/;

    // Verifica se todos os campos foram preenchidos corretamente
    if (!email || !password || !phoneRegex.test(telephone)) {
        // Adiciona a classe "error" para estilizar a mensagem de erro
        messageBox.classList.add("error");
        messageBox.innerText = "Erro! Preencha todos os campos corretamente.";
        messageBox.style.display = "block";
    } else {
        // Adiciona a classe "success" para estilizar a mensagem de sucesso
        messageBox.classList.add("success");
        messageBox.innerText = "Sucesso! Registro efetuado com sucesso.";
        messageBox.style.display = "block";
    }

    // Oculta a mensagem após 3 segundos (3000 milissegundos)
    setTimeout(() => {
        messageBox.style.display = "none"; // Esconde visualmente a mensagem
        messageBox.remove(); // Remove o elemento do DOM após desaparecer
    }, 3000);
});




