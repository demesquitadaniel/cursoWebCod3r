// Area de uma circunferencia
// Pi 8 raio ao quadrado, ou raio vezes raio

const raio = 10;
let PI = 3.141592;
let area = PI * (raio * raio);

console.log("Temos uma circunferência de raio: " + raio + " m");
console.log("Sabemos que o 'pi' tem valor constante de: " + PI);
console.log("Portanto a área desta circunferência é de: " + area + " m2.");

PI = Math.PI;
console.log("...");
console.log("Mais precisamente, o 'pi'com 15 algarismos, que é: " + Math.PI);
console.log("Então temos a área de: " + area + " m2.");