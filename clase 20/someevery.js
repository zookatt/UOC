   const people = [
        {
            id: 1,
            name: 'Juan',
            age: 27
        },
        {
            id: 2,
            name: 'Laura',
            age: 55
        },
        {
            id: 3,
            name: 'Roberto',
            age: 35
        }
    ]

// La instrucción some devuelve un booleano que será true cuando AL MENOS UNO de los items CUMPLE la condición.
const v = people.some(person => person.age === 35);
console.log(v); // true

//La instrucción every devuelve un booleano que será true cuando TODOS los items cumplan la condición.

const v2 = people.every(person => person.age === 35);
console.log(v2); // false