                    // Practica 1. Objetos y ciclos

// 1. Crear una variable con un array vacio y agregar dinámicamente 5 valores diferentes. 

const arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log(arr);

// 2. Qué longitud tiene el array 

const myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log(myAlphabet.length);

// 3. Imprime uno por uno cada valor del siguiente array

const fruits = ['pera', 'manzana', 'durazno', 'banana'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


// 4. Sumale 2 a cada elemento del siguiente array: 

const numbers = [1, 3, 5, 7, 9];

const suma = numbers.map(num => num + 2);

console.log(suma);

// 5. Haz un algoritmo que cuente el número de veces que aparece la letra r en la frase "Erre con erre
// cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril". 
// Imprime el resultado en la pantalla. 

const frase = "Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril";
const fraseArr = frase.split("");  

console.log(fraseArr);

const cantLetras = fraseArr.reduce((contadorR, r) => {
    contadorR[r] = (contadorR[r] || 0) + 1;
    return contadorR;
    }, {});

    console.log(cantLetras);

    console.log("Hay " + cantLetras.r + " letras 'r'.");
// 6. Con el siguiente array realiza las operaciones que se presentan a continuación: 

let people = ["Ana", "Carolina", "Laura", "Natalia", "Fernanda"];

//     a. Usando un for loop itera el array e imprime el nombre de cada personal.

let nombre = ""; 
    for (let i = 0; i < people.length; i++) {
       nombre = people[i];
        console.log(nombre);
    }

//     b. Escribe el comando para eliminar a Carolina del array. Imprime en pantalla la variable people. 

const eliminarCarolina = people.splice(1, 1);
console.log(people);

//     c. Escribe el comando para eliminar a Fernanda. Imprime en pantalla la variable people.

const eliminarFernanda = people.pop(); 
console.log(people); 

//     d. Escribe el comando para agregar a Francisco al array. Imprime en pantalla la variable people.

const addFrancisco = people.push('Francisco'); 
console.log(people); 

//     e. Escribe el comando para agregar tu nombre al final del array. Imprime en pantalla la variable people.

const miNombre = 'Lorena'; 
const addMiNombre = people.push(miNombre); 
console.log(people); 

//     f. Escribe el comando para retomar el indice de Natalia (indexOf) e imprimelo en pantalla. 

console.log(people.indexOf('Natalia'));

//     g. Hay 2 formas para acceder al indice de tu nombre (que es el ultimo valor del array), describe cuáles son.

//Forma 1: indexOf
console.log(people.indexOf('Lorena'));
//Forma 2: La longitud del array menos 1
console.log(people.length-1); 

// 7. Piensa en 3 canciones que te gusten, ahora crea un objeto con los valores de tu canción. Guardalas en las 
// variables song1, song2 y song3. Cada una debe contener las propiedades nombre, artista, año y album. 

const song1 = {
    nombre: "I don't wanna miss a thing",
    artista: "Aerosmith",
    año: 1998,
    album: "I don't wanna miss a thing"
    }; 

const song2 = {
    nombre: "We will rock you",
    artista: "Queen",
    año: 1977,
    album: "News of the World"
    };

const song3 = {
    nombre: "Let it be",
    artista: "The Beatles",
    año: 1970,
    album: "Let it be"
    }; 
    
// 8. Declara un clase Tienda que permita registrar: 
//     Nombre de la tienda. 
//     Dirección de la tienda. 
//     Propietario de la tienda. 
//     Rubro de la tienda. 

class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let miTienda = new Tienda("La Original", "calle 12 No 20 -10", "Julian Casas", "Supermercado");

// Luego invocar al menos tres (3) objetos usando esta clase. 

console.log(miTienda.propietario); 
console.log(miTienda.rubro); 
console.log(miTienda.nombre); 

// 9. Instanciar 5 tiendas usando la clase Tienda que se creó en el punto anterior. 

const Tienda1 = new Tienda("La 40", "calle 40 15 - 25", "Carolina Pachon", "Dulces"); 
const Tienda2 = new Tienda("La 20", "calle 20 15 - 25", "Roberto Muñoz", "Textil"); 
const Tienda3 = new Tienda("La 30", "calle 30 15 - 25", "Jairo López", "Farmacia"); 
const Tienda4 = new Tienda("La 50", "calle 50 15 - 25", "Daniel Rojas", "Papeleria"); 
const Tienda5 = new Tienda("La 10", "calle 10 15 - 25", "Clara Velez", "Boutique"); 

// 10. Dado el objeto: 
const lion = {
    species: 'Panthera leo', 
    foots: 4,
    hasTail: true, 
    weight: '190kg',
    isMammal: true,
}; 
// Obtener e imprimir por separado el valor de 3 propiedades usando notación de punto y de corchetes. 

console.log(`${lion.foots}`);
console.log(`${lion.hasTail}`);
console.log(`${lion.weight}`);
