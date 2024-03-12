
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