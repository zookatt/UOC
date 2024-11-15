// for (inicio; termino; iteracion) {
//     sentencia1;
//     sentencia2;
//     sentencian;
// }
//Bucle FOR se usa cuando SABEMOS cuantas veces vamos a iterar
for(let i=0; i<10; i++){
	console.log(i);
}

//Ejercicios

//1
for(let i=0; i<=100; i+=2){
	console.log(i);
}

//2
for(let i=0; i<=100; i++){
	if (i%2===0){
    console.log(i)
  } 
}

//3
for(let i=1; i<=20; i++){

	if(i%3===0 && i%5===0){ //la condicion mas resolutiva va delante
    console.log('FizzBuzz')
  } else if (i%3===0){
    console.log('Fizz')
  } else if(i%5===0){
    console.log('Buzz')
  } else{
    console.log(i)
  }
  
}

//4
let suma=0;//definir resultado de suma fuera del buscle y poner el 0 como inicio, si no resultado final sale NaN
for(let i=5; i>=0; i--){
   console.log(i)
   suma=suma+i;// o suma+=i
}
console.log(suma)//leer suma en la consola, tambien fuera del bucle, en el ambito donde estaba definido

//5
//Utilizando el bucle for, mostrar la tabla de multiplicar del número 7.
let resultado=0;
for(let i=1; i<=9; i++){
//console.log(i)
 resultado = 7 * i;
 console.log(`${7} * ${i} = ${resultado}`)
}

//6

// Mostrar la tabla de multiplicar que va del 1 al 9. Usaremos dos bucles anidados.

// Paso para resolver el ejercicio:

// 1. Utilizando un bucle for, hacer la tabla de multiplicar del número 1.

// 2. Anidar la tabla de multiplicar hecha en el paso anterior, dentro de otro bucle for, que muestre las tablas de multiplicar de los números que van del 1 al 10.

for (let j=1; j<=10; j++){
   for(let i=1; i<=9; i++){
   //console.log(i)
   let resultado = j * i
   console.log(`${j} * ${i} = ${resultado}`)
   }
}
