//Operador ternario
const a = 5;
const b = 3;

if(a>b){console.log('a es mayor que b');}
else{console.log('a no es mayor que b');}
//operador condicional ( ? : ) dentro del console.log para resolverlo
console.log(a>b ? 'a es mayor que b' : 'a no es mayor que a');

//comparativas dentro de console.log!!!
//a>b ? console.log( 'a es mayor que b') : console.log('a no es mayor que a'); ---ES INCORRECTO


//Ejercicios
//1
const c=-7;
console.log(c > 0  ? `${c} es positivo` : `${c} es negativo`);

//2
const i=15;
console.log(i % 2===0 ? `${i} es Par`:`${i} es Impar`)