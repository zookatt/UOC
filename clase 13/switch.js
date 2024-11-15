//Estructura switch

const opcion = 'opcion3';

switch(opcion) {//<--variable
	case 'opcion1'://<--variable valor de esa variable
		console.log('Has escogido la opción 1');
	break;
	case 'opcion2'://<--variable valor de esa variable
		console.log('Has escogido la opción 2');
	break;
	case 'opcion3'://<--variable valor de esa variable
		console.log('Has escogido la opción 3');
	break;
	default:
		console.log('No has escogido ninguna de las opciones posibles');
}

//Ejercicios
//1
const color = 'amarillo';

switch(color) {
	case 'rojo':
		console.log('Has escogido rojo');
	break;
	case 'azul':
		console.log('Has escogido azul');
	break;
	case 'amarillo':
		console.log('Has escogido amarillo');
    break;
	default:
		console.log('No has escogido ningún color de la lista!');
}

//2
const golosina = 'nubes';

switch(golosina) {
	case 'chicle':
		console.log('Has escogido un chicle');
	break;
	case 'gominola':
		console.log('Has escogido una gominola');
	break;
	case 'regaliz':
		console.log('Has escogido un regaliz');
	break;
	default:
		console.log('No has escogido ningún dulce de la lista!');
}