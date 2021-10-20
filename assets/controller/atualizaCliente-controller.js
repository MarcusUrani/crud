import { clienteService } from '../service/cliente-service.js'

const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
})

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = '../telas/edicao_concluida.html';
    })
})