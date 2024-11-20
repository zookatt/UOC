//Función que no devuelve nada

function noDevuelveNada(a, b){
	const resultado = a + b;
	console.log(resultado);
}

noDevuelveNada(2,3);

// Función que devuelve algo

function devuelveValor(a,b){
	const resultado = a + b;
	return resultado; //devuelve el resultado
}
// El valor que devuelve una función debe ser almacenado en la misma línea en la que llamas a la función.
// Significa: v es igual a lo que devuelve calcularPresupuesto().
const valorDevuelto = devuelveValor(2,3);//almacena el resultado
console.log(valorDevuelto);

//1
function hello() {
	return "Hi!";
}

const x = hello();
console.log(x);


//2
function reply(phrase) {
	return phrase;
}

const x1 = reply("How do you do?");
console.log(x1); // ¿Qué valor de x se mostrará en la consola?

//3
function whereIs(name) {
	return "Dónde esta " + name + "?";
}

const x3 = whereIs("Jacky");
console.log(x3); // ¿Qué valor de x se mostrará en la consola?


//4
function echo(name){
return name;
}
const greta = echo("Greta");
console.log(greta);
const co2 = echo('C02')
console.log(co2)

//5
function saludar (nom){
return 'Hola ' + nom

}
const greeting1 = saludar('Ada');
console.log(greeting1);
const greeting2 = saludar('Grace');
console.log(greeting2);


//6
function test(val) {
	if (10<=val && val<=20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}
const resultado =test(9);
console.log(resultado)

//7
function testEqual(val) {
	if (val===12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}
const result=testEqual(12);
console.log(result)

//8
function testElse1(val) {
	
	if (val > 5) {
		return "Mayor que 5";
	}else{
		return "Menor o igual a 5";
	}
	
}
const devuelto =testElse1(7);
console.log(devuelto);

//9
function testElse2(val) {

	if (val > 5) {
		return"Bigger than 5";
	}else if (val < 5) {
    return"Smaller than 5";
	}else{
		return "Equal to 5";
	}
	
}

const devuelto1 =testElse2(3);
console.log(devuelto1);

//10

function hola(nombre) {
	return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x4 = h1 +  " " + h2;
console.log(x4); // 'Hi Selva hi Pola

//11

function duplica(nombre) {
	return nombre + " and " + nombre;
}

const x5 = duplica("Roy");
console.log(x5); // 'Roy and Roy'

//12
function testSize(num) {
 
  if(num<5){
    return "Tiny";
  }else if(num < 10){
    return "Small";
  }else if(num<15){
    return "Medium";
  }else if(num<20){
    return "Large";
  }else{
    return "Huge";
  }
}

const resultTestSize =testSize(19);
console.log(resultTestSize)


//13
function nand(bool1,bool2){
if (bool1===true && bool2===true){
  return false;
}else{
  return true;
}

// return !(bool1&& bool2)
}

const res = nand(true,true)
console.log(res)

//14 
function nor(bool3,bool4){
if (bool3===false && bool4===false){
  return true;
}else{
  return false;
}
}

const res2 = nor(true,true)
console.log(res2)

//15
function xor(bool5,bool6){
// if (bool5===true && bool6===false || bool5===false && bool6===true){
//   return true;
// }else{
//   return false;
// }

if(bool5!==bool6 ){
	 return true;
}else{
  return false;
}
}

const res3 = xor(true,false)
console.log(res3)