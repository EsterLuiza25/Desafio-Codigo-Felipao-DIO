// Desafio primeiro projeto Felipao DIO
// Ester Luiza 

// Variavéis
   
   
// Matriz contendo o nome do personagem e o XP 
let personagens = [
    ["Blank", 1000],
    ["Whity", 2000],
    ["Penki", 7000],
    ["Branw", 8000],
    ["Purpu", 9000],
    ["Grii", 10000],
    ["Gray", 11000]
];

let i = 0;
do {
    // Variáveis
    let nome = personagens[i][0]; 
    let xp = personagens[i][1];   
    let nivel;

    // Estrutura de decisão com if e else if
    if (xp < 1001) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 10000) {
        nivel = "Radiante";
 
    }

    // Saída
    console.log(`O personagem de nome ${nome} está no nível ${nivel}`);

    i++; 
} while (i < personagens.length);


