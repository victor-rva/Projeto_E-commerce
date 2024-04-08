
 export const catalago = [
    {
        id: "1",
        nome: "Casaco Verde",
        marca: "Zara",
        preco: 70,
        imagem: "roupa01.jpg",
        masculino: true,
    },
    {
        id: "2",
        nome: "Casaco Branco",
        marca: "Zara",
        preco: 110,
        imagem: "roupa02.jpg",
        masculino: true,
    },
    {
        id: "3",
        nome: "Casaco Branco2",
        marca: "Zara",
        preco: 120,
        imagem: "roupa03.jpg",
        masculino: true,
    },
    {
        id: "4",
        nome: "Casaco Couro",
        marca: "Zara",
        preco: 220,
        imagem: "roupa04.jpg",
        feminino: true,
    },
    {
        id: "5",
        nome: "Conjunto Preto",
        marca: "Zara",
        preco: 150,
        imagem: "roupa05.jpg",
        feminino: true,
    },
    {
        id: "6",
        nome: "Casaco Branco3",
        marca: "Zara",
        preco: 290,
        imagem: "roupa06.jpg",
        feminino: true,
    },
    {
        id: "7",
        nome: "Macacão Rosa",
        marca: "Zara",
        preco: 170,
        imagem: "roupa07.jpg",
        feminino: true,
    },
    {
        id: "8",
        nome: "Macacão Verde",
        marca: "Zara",
        preco: 170,
        imagem: "roupa08.jpg",
        feminino: true,
    },
];


export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave){
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto){
    const produto = catalago.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article");
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative', "mb-2", "w-96",]

    for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `
    <img src="../assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg"/>
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm ">${produto.nome}</p>
      <p class="text-slate-400 text-xs" >Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>
`;
  
elementoArticle.innerHTML = cartaoProdutoCarrinho;
containerProdutosCarrinho.appendChild(elementoArticle);
}