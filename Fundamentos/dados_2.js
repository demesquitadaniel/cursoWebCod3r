console.log(19.90 * 0.6); // 0.6 é valor de 40% descontado de 100%, ou seja 60%

let preco = 19.90; // let = var e var = let, mas o let é mais usual hj em dia
let desconto = 0.4;
let precoComDesc =  preco * (1 - desconto);
console.log(precoComDesc);

let nome = "Caderno"; // String (letras, simbolos, etc)
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria +
    ", Preço: " + preco);
console.log("Desconto: " + desconto * preco);
console.log("Preço Final: " + precoComDesc);