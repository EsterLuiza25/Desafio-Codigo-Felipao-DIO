// Desafio primeiro projeto Felipão DIO 
// Ester Luiza

// Usando vetor 
let personagens = [
    ["Blank", 1000],
    ["Whity", 2000],
    ["Penki", 7000],
    ["Branw", 8000],
    ["Purpu", 9000],
    ["Grii", 10000],
    ["Gray", 11000]
];


for (let i = 0; i < personagens.length; i++) {
    let nome = personagens[i][0];  
    let xp = personagens[i][1];    
    let nivel;                     

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else {
        nivel = "Radiante";
    }

// Mostrar o nome e o nível do personagem
console.log(`O personagem de nome ${nome} está no nível ${nivel}`);
}
