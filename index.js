import { criarItemDaLista } from "./scripts/criarItemDaLista.js"; 
import verificarListaVazia from "./scripts/verificarListaVazia.js"; 
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", function(evento) {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(); //chamando a função criarItemDaLista e armazenando o item criado na variável itensDaLista
    listaDeCompras.appendChild(itemDaLista); //o item da lista é adicionado à lista de compras, tornando-o visível na página.
    verificarListaVazia(listaDeCompras); //chamando a função para verificar se a lista está vazia ou não, para exibir ou ocultar a mensagem de lista vazia.
});


verificarListaVazia(listaDeCompras); //chamando a função verificarListaVazia para verificar o estado inicial da lista de compras, garantindo que a mensagem de lista vazia seja exibida corretamente quando a página for carregada pela primeira vez.