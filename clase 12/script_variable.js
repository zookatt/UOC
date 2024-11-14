// 'use strict' para evitar errores
console.log(2+2);
// alert(hola) Quokka no funciona porque esta vinculado al navegador, solo usar consola.

//hacer fetch para recuperar datos de API
// fetch('https://swapi.dev/api/people/1')
// .then(response=>response.json())
// .then(data=> console.log(data))
console.log(5)

// variables son recipientes de informacion, en ese 'vaso'
//'cafe' es el valor que contiene variable
let vaso ='cafe';
let vaso2='palomitas';
vaso2 = vaso;

//var no se deberia usar, esta obsoleto ya(pasado)

//camelCase
let edadUsuario=7;

// Javasript es lenguaje muy poco tipado, todos son variables, por eso es mas facil aprender. por eso crearon typescript

let variable1=3+4
console.log(variable1)

let variable2='aaa'+'bbb'
console.log(variable2)

let variable3="3"+"4"
console.log(variable3)

//tipo de dato
let a;//undefined


//convertir un numero en texto
let number = 5;
let numberConvertedInText1 = String(number);
let numberConvertedInText2 = ''+number;

//convertir un texto en numero
let txt= '5';
let number1 = Number(txt);
let number2 = +txt;
let number3 = parseInt(txt); // Esto lo convierte a un número entero, eliminando los decimales si los hubiese



