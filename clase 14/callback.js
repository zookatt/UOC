// Una función de callback es una función que se pasa a otra función como un argumento.
function callback(){
	console.log('Llamada al callback');
}

function empezarTodo(a, b, myCallback){
	console.log(a,b);
	myCallback();
}

empezarTodo(3,4, callback);

