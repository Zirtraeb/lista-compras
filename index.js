import { criarItemDaLista } from "./scripts/criarItemDaLista.js"; //importando a função criarItemDaLista do arquivo criarItemDaLista.js
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0; //variável para contar o número de itens adicionados à lista. let é uma variavel que pode ser alterada, diferente de const


botaoAdicionar.addEventListener("click", function(evento) {
    const itensDaLista = criarItemDaLista(); //chamando a função criarItemDaLista e armazenando o item criado na variável itensDaLista
    listaDeCompras.appendChild(itemDaLista); //o item da lista é adicionado à lista de compras, tornando-o visível na página.
    verificarListaVazia(); //chamando a função para verificar se a lista está vazia ou não, para exibir ou ocultar a mensagem de lista vazia.
});


const mensagemListaVazia = document.querySelector(".lista-vazia"); //queryselector retorna o elemento, no caso a classe listaVazia, usando a mesma sintaxe css de . e #

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li"); //seleciona todos os elementos li dentro da lista de compras
    if (itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block";
        } else {
        mensagemListaVazia.style.display = "none"; 
        } //se a quantidade de itens da lista for igual a zero, a mensagem de lista vazia é exibida, caso contrário, ela é ocultada.
}