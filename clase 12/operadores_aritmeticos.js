//Operadores de concatenación
const t = 'texto2';
console.log('texto1 ' + t + 'texto3' );
//para espacio usar +' '+, no cambiar valor de variables y no introducir espacios


// ES6 Template strings o interpolación de cadenas
const t2 = 'texto2';
console.log(`texto1 ${t2} texto3`);

//Operadores aritméticos
console.log('adición ', 7+2);
console.log('sustracción ', 7-2);
console.log('multiplicación ', 7*2);
console.log('división ', 7/2);
console.log('resto ', 7%2);//resto se usa para comprobar si numero es par o impar, si seto es 1 es impar, y si resto es 0 es par
console.log('potencia', 7**2);

//Ejemplos raros en JS
// Infinity al dividir al 0
let n = 10 / 0;
console.log(n); // Infinity
//NaN
let n2;
let r = 10 + n2;
console.log(r); // NaN (Not a Number)




//Ejercicios:
//1 
const txt1='Este es el principio';
const txt2='Este es el final'
const txt3=txt1 +' '+ txt2
console.log(txt3)

//2
const euros = 7;
const dolares = euros*2// Modificar sólo esta línea
console.log(dolares); // Debería mostrar 14

//3
const precio = 100;
const precioConIva = precio*1.21// Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121

//4
const ancho=4;
const alto=7;
const area=ancho*alto;
console.log(area)

//5
const centigrados = 20;
const fahrenheit =(centigrados*9/5 )+32; // Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68

//6
const nombre = 'Juan';
const material = ' madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`)


