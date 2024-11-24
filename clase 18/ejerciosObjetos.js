//1
const miPerro ={
  piernas: 4,
  colas: 1,
  amigos: ["Roi", "Horus"]
}

console.log(miPerro.piernas)
console.log(miPerro.colas)
console.log(miPerro.amigos)

//2
const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;      
const nombre = testObj.nombre;   

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

//3
const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj1[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

//4

//Lo de abajo nque propiedades estan entre corchetes no afecta a 
// nada, pero es un formato de json
const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

//Formato json
// const myDog = {
//     nombre: "Coder",
//     piernas: 4,
//     colas: 1,
// };

myDog.nombre="HappyCoder"

console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

//5
function phoneticLookup(val) {
    let result = "";

    const lookup= {
       'alpha': "Adams",
       'bravo': "Boston",
       'charlie':"Chicago",   
       'delta': "Denver",  
       'echo':"Easy",
       'foxtrot': "Frank",
    }
    result =lookup[val]
    return result;
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago


//6
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },

     {
        "artista": "The Killers",
        "titulo": "Hot Fuss",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    }
];

console.log(myMusic[1].formatos[0])

//7
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

//8
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]