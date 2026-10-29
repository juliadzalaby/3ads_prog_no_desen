const caixinhaNome = document.getElementById('input-nome');
const caixinhaBio = document.getElementById('input-bio');
const botaoSalvar = document.getElementById('btn-salvar');

const enderecoDoBackEnd = "http://localhost:3000/api/perfil&quot;;

function enviarDadosParaOBack() {

  const dadosDoPerfil = {
        nome: caixinhaNome.value,
        biografia: caixinhaBio.value
    };

    fetch(enderecoDoBackEnd, {
        method: "POST", // POST avisa: "Estou enviando algo novo para guardar!"
        headers: {
            "Content-Type": "application/json" // Avisa que estamos enviando um texto padrão de computador
        },
        body: JSON.stringify(dadosDoPerfil) // Transforma os dados em texto puro para viagem
    })
    .then(resposta => {
        // Se a viagem deu certo e o Back-end recebeu, avisa na tela!
        alert("Muito bem! Os dados foram enviados para o Back-end!");
    })
    .catch(erro => {
        // Se o Back-end estiver desligado (o que é normal agora, já que não criamos ele ainda), vai cair aqui:
        alert("O Front-end tentou enviar, mas o Back-end ainda está desligado.");
    });
}

botaoSalvar.addEventListener("click", enviarDadosParaOBack);
