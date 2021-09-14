// tipo string 

const string1 = "Sou uma frase";
const string2 = "Meu nome é ";
const string3 = 'Sou uma frase';
const nome = "Yago";

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string2 + nome);



// Verificação se é maiuscula ou não 
// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true