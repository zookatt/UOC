// Una función de callback es una función que se pasa a otra función como un argumento.
// no lod va,os a udsar muchos
function callback(){
	console.log('Llamada al callback');
}

function empezarTodo(a, b, funcion){
	console.log(a,b);
	funcion();//escoges el momento cuando quieres que se ejecuta
}
empezarTodo(3,4, callback); //aqui callback() es la fucion que paso a la funcion de empezarTodo()
//esta funcion no devuelve nada


// Llamar a una función al cabo de un tiempo
// El código anterior llama a la función miFunción al cabo de dos segundos.
setTimeout(miFuncion, 2000);

// El código anterior llama a la función miFuncion cada dos segundos.
setInterval(miFuncion, 2000);