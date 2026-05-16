const inputItem  = document.getElementById("input-item"); //se colocassemos.value, imprimiria o valor do campo de inputItem, que no caso está vazio.
let contador = 0; //variável para contar o número de itens adicionados à lista. let é uma variavel que pode ser alterada, diferente de const


export function criarItemDaLista() { // O export permite que a função seja usada em outros arquivos, assemelha com DOM
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

    return itemDaLista;
}