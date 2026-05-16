const mensagemListaVazia = document.querySelector(".lista-vazia"); //queryselector retorna o elemento, no caso a classe listaVazia, usando a mesma sintaxe css de . e #

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li"); //seleciona todos os elementos li dentro da lista de compras
    if (itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block";
        } else {
        mensagemListaVazia.style.display = "none"; 
        } //se a quantidade de itens da lista for igual a zero, a mensagem de lista vazia é exibida, caso contrário, ela é ocultada.
    }

    export default verificarListaVazia; //exportando a função para ser usada em outros arquivos, como o index.js, onde ela é chamada para verificar se a lista está vazia ou não.