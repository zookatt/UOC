// Arrow functions
// const nombreDeLaFunción = parámetros => cuerpoOvalorDevuelto
//Diferencia con funciones normales : no puedes llamar a la funcion antes de declararla

//Sun paramentros

 // saludar(); <---- hacer  asi es incorrecto
const saludar= () => {
	console.log('Hola'); 
}
 saludar();// Hola

//Con UN parametro
const multiplicar1 = (param) => {
	const resultado = param * 2;
	console.log(resultado)
}

const multiplicar2 = param => {
	const resultado = param * 2;
	console.log(resultado)
}

multiplicar1(4);  // 8
multiplicar2(4);  // 8


//Múltiples parámetros
const multiplicar = (x, y) => {
	const resultado = x * y;
	console.log(resultado);
}

multiplicar(2, 3);  // 6



//Sólo con return
const multiplicar3 = (x, y) => { return x * y };
const multiplicar4 = (x, y) =>  x * y;

const valor1 = multiplicar3(2, 3);
const valor2 = multiplicar4(2, 3);

console.log(valor1); // 6
console.log(valor2); // 6


