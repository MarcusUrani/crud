import { clienteService } from '../service/cliente-service.js'

const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

try {
    clienteService.detalhaCliente(id)
    .then(dados => {
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    })
}
catch(erro) {
    console.log(erro);
    window.location.href = '../telas/erro.html';
}


const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        window.location.href = '../telas/edicao_concluida.html';
    }
    catch(erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html'
    }
})