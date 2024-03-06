import {catalago} from "./utilidades";

export function renderizarCatalogo(){
    for (const produtoCatalago of catalago) {
        const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalago.id}">
        <img src="./assets/img/${produtoCatalago.imagem}" alt="Produto ${produtoCatalago.id} do site" style="height: 300px"/>
        <p class='marca'>${produtoCatalago.marca}</p>
        <p>${produtoCatalago.nome}</p>
        <p>$${produtoCatalago.preco}</p>
        <button>Adicionar</button>
        </div>`;
        
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    };
}

