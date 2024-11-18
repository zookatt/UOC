function saludar(nombre){
  console.log('Buenas tardes ' + nombre)
}

saludar('Pablo')

//1
function random(bool){
console.log (bool === true ? 'Sí, eso es cierto' :'No, eso es falso')

}
random(false)

//2
let comida="garbanzos";
function hoyQuieroComer(comida){
console.log(`hoy quiero comer ${comida}`)
}
hoyQuieroComer(comida);

//3
function calcularCubo (n){
console.log(n*n*n)
}
calcularCubo(3);


//4
function calcularVelocidad(velocidad){
console.log(`La velocidad en metros/horta es ${velocidad*1000}`)
}
let velocidad = 3; // km/h
calcularVelocidad(velocidad);


//5
function calculaArea(alto, ancho){
  console.log(alto*ancho)
}
calculaArea(7, 6);

//6
//Area triángulo = base*altura/2
function areaTriangulo(base, altura){
  console.log(base*altura/2)
}
areaTriangulo(5,6)


//7
function calculaPerimetro(radio){
  console.log(2*Math.PI*radio)
}
calculaPerimetro(5);

function calcularArea(radio){
  console.log(Math.PI*radio*radio)
}
calcularArea(3);