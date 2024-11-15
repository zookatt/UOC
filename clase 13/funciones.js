// function [nombreDeLaFuncion]([parámetros de la función, si los tuviese]){
//    [código de la función]
// }

//Función que no devuelve nada, SIN parámetros(no recibe parametros)
function saludar1 (){
  console.log('Buenos dias')
}

saludar1();
//Función que no devuelve nada, CON parámetros(recibe parametros, en este caso "nombre")

// 1. DECLARAR LA FUNCION
function saludar2 (nombre){
  console.log('Buenos dias ' + nombre)
}
// 2. LLAMAR A LA FUNCION
saludar2("Paco");