//Operadores de comparación
//booleanos
console.log('7>2: ', 7>2);     // true
console.log('7<2: ', 7<2);     // false
console.log('7 >= 2: ', 7>=2); // true
console.log('7 <= 2: ', 7<=2); // false
console.log('7 == 2: ', 7==2); // false
console.log('7 != 2: ', 7!=2); // true

//Diferencia entre == y ===
console.log(1=='1'); // true, conversión automática del tipo de datos
console.log(1==='1'); // false, ya que son datos de diferente tipo
console.log(0==false); // true
console.log(0===false); // false, ya que son datos de diferente tipo

// Condicional if
// const dato1 = 5;
// const dato2 = 3;
	
// if(dato1 > dato2){
// 	console.log('dato1 es mayor que dato2');
// }

//________________________________________________
//Ejercicio: operador booleano: Modificar SÓLO EL OPERADOR BOOLEANO para lograr que se imprima el mensaje.
//cambiar > a >= o ===
const dato1 = 10;
const dato2 = 10;
if(dato1 >= dato2){
	console.log('exito');
}
//________________________________________________

//ELSE IF
const dato3 = 3;
const dato4 = 5;
if(dato3 > dato4){
	console.log("dato1 es mayor que dato2");
}else if(dato3==dato4){
	console.log('dato1 es igual que dato2');
} else{
	console.log('Va a ser que no...');
}

//Ejercicio IF
// 1 
if (10 == 10){
    console.log('You got a true!')
 } else {
    console.log('You got a false!')
}

//2
const nota=6;

if(nota>5){
  console.log('Aprobado')
}else if(nota==5){
  console.log('Aprobado por los pelos')
}else{
  console.log('Suspenso')
}

//3
const i=51;
if (i>0){
  console.log('Positivo')
}else{
  console.log('Negativo')
}

if(i%2===0){
  console.log("Par")
}else{
  console.log("Impar")
}

if(i%5===0){
  console.log('Multiplo de 5')
}else{
   console.log('NO multiplo de 5')
}

if(i%10===0){
  console.log('Multiplo de 10')
}else{
   console.log('NO multiplo de 10')
}

if(i>100){
  console.log("Mayor que 100")
}else {
  console.log("Menor que 100")
}

//4
const n1 = 3;
const n2 = 7;
const op='/'; // cambiar a: *, + o /


if(op==='+'){
  console.log(n1+n2)
}

if(op==='-'){
  console.log(n1-n2)
}

if(op==='*'){
  console.log(n1*n2)
}

if(op==='/'){
  console.log(n1/n2)
}