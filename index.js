const inputItem  = document.getElementById("input-item"); //se colocassemos.value, imprimiria o valor do campo de inputItem, que no caso está vazio.
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0; //variável para contar o número de itens adicionados à lista. let é uma variavel que pode ser alterada, diferente de const


botaoAdicionar.addEventListener("click", function(evento) {
    evento.preventDefault(); //previne o comportamento padrão do botão, que é recarregar a página. Já o addeventlistener informa o valor do input no momento do clique.
    if (inputItem.value === "") {
        alert("Insira um item!"); //impede adicionar item vazio
        return; //qdo a função encontra o return, é interrompida.
    }

    const itemDaLista = document.createElement("li"); //criamos o elemento li, que representa um item da lista. com o .createElement, ele é anexado ao DOM, mas ainda não é visível na página.
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); //atribuindo uma classe aos elementos criados, para facilitar a estilização e organização.

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++; //criando um id único para cada checkbox, usando o contador para garantir que cada um tenha um identificador distinto.

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value; //o valor do campo de input é atribuído ao texto do elemento pconstruindo arvore genealogica mas ao contrario, do menor para o pai, que é o itemlista

inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) { 
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
            }
    })

    containerItemDaLista.appendChild(inputCheckbox); // elemento fikho é adicionado ao elemento pai, no caso, o checkbox é adicionado ao container
    containerItemDaLista.appendChild(nomeItem); //o nome do item é adicionado ao container

    itemDaLista.appendChild(containerItemDaLista); //o container, que agora contém o checkbox e o nome do item, é adicionado ao elemento li, que representa o item da lista.

   const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" }); //obtendo o dia da semana atual em português do Brasil, o tolocaldatestring permite a formatação da data
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
    });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`; //criando uma string formatada que combina o dia da semana, a data e a hora em um formato legível.

    const itemData = document.createElement("p"); 
    //criamos um elemento pois só é possivel criar um appendchild com elementos
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data"); //atribuindo o estilo
    itemDaLista.appendChild(itemData); //o elemento que contém a data completa é adicionado ao item da lista, permitindo que a informação de quando o item foi adicionado seja exibida junto com o nome do item.
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