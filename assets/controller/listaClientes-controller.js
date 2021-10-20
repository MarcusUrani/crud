import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaCliente = document.createElement('tr')
    const conteudo = `<td class="td" data-td>${nome}</td>
                    <td>${email}</td>
                    <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>`;
    
    linhaCliente.innerHTML = conteudo;
    linhaCliente.dataset.id = id;
    return linhaCliente;
}

const tabela = document.querySelector('[data-tabela]');
tabela.addEventListener('click', (event) => {
    let botaoExcluir = event.target.className == 'botao-simples botao-simples--excluir';
    if(botaoExcluir) {
        const linhaDoCliente = event.target.closest('[data-id]');
        let id = linhaDoCliente.dataset.id;
        clienteService.removeCliente(id)
        .then(() => {
            linhaDoCliente.remove();
        })
    }
})

clienteService.listaClientes()
.then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
});