const inputItem  = document.getElementById("input-item"); //se colocassemos.value, imprimiria o valor do campo de inputItem, que no caso está vazio.

const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", function(evento) {
    evento.preventDefault(); //previne o comportamento padrão do botão, que é recarregar a página. Já o addeventlistener informa o valor do input no momento do clique.
    if (inputItem.value === "") {
        alert("Insira um item!"); //impede adicionar item vazio
        return; //qdo a função encontra o return, é interrompida.
    }

    const itemDaLista = document.createElement("li"); //criamos o elemento li, que representa um item da lista. com o .createElement, ele é anexado ao DOM, mas ainda não é visível na página.
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); //atribuindo uma classe aos elementos criados, para facilitar a estilização e organização.

}); 