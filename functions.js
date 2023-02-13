let copa2026 = ["brasil", "franca", "alemanha", "italia"];
console.log(copa2026);
copa2026.push("argentina"); //adiciona um item no final da lista
console.log(copa2026);
copa2026.unshift("campeche"); // adiciona um item no início da lista
console.log(copa2026);
copa2026.splice(3,1,'Equador');// adiciona Equador na posição 3 e retira o item que vem depois, no caso, Alemanha. Pode também não adicionar ninguem, daí só eleimina
console.log(copa2026); */


let copa2026 = ["brasil", "franca", "alemanha", "italia"];
copa2026.pop(); // remove o último item da lista
console.log(copa2026)

let copa2026 = ["brasil", "franca", "alemanha", "italia"];
copa2026.forEach( (time) => {console.log(`O time é:${time}`);
})

console.log(copa2026)
