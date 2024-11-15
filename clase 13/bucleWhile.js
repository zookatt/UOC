//Bucle WHILE se usa cuando no sabemos cuantas veces vamos a iterar
// let valor = 0;
// while(valor<4){
// 	console.log(valor);
// 	valor++;
// }

//1. Suma los números del 5 al 0 (inclusive), en orden descendente usando un bucle de while.
let value=5;
let suma=0;
while(value>=0){
  console.log(value);
  suma+=value;
  // suma=suma+value
  value--;

}

console.log(suma)

//While si no cumple la condicion, no se ejecuta  unca
// DO  WHILE se ejecuta al mentos una vez

// let random = Math.random();
// while (random > 0.5) {  comprueba primero y luego hace el codigo(ejecuta)
//     console.log(random);
//     random = Math.random();
// }

let random;
do {// hace el codigo, osea ejecuta
    random = Math.random();
    console.log(random);
} while (random > 0.5);//y luego comprueba