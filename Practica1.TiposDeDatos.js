                    // Practica 1. Tipo de datos

// 1. Crea tres(3) variables para asignar el nombre, apellido y edad del personaje principal 
// de una película o serie que te guste

let nombre = "Homero";
let apellido = "Simpson";
let edad = 40;

//2. Imprime en pantalla el nombre y el tipo de cada variable anterior de tal forma que
//en cada línea de la pantalla se vea algo como
                    // Nombre: Harry, tipo: String
                    // Apellido: Potter, tipo: String  
                    // Ocupacion: 42, tipo: number


console.log("Nombre: " + nombre + ", tipo: " + typeof("Homero") ); 
console.log("Apellido: " + apellido + ", tipo: " + typeof("Simpson") );
console.log("Edad: " + edad + ", tipo: " + typeof(40) );

//3. Crea una variable llamada city y asigna 5 lugares que aparezcan en la pelicula
//o serie. Despues de cada asignación imprime el contenido de la variable.

let city1 = "Springfield";
console.log(city1); 
let city2 = "Shelbyville";
console.log(city2); 
let city3 = "New York";
console.log(city3); 
let city4 = "Cypress Creek";
console.log(city4); 
let city5 = "Capital City";
console.log(city5); 

//4. Completa las predicciones! Hay un listado con tipos de datos, 
// primero escribe en la predicción que dato crees que es y luego
//ejecuta el comando para verificar si tu respuesta es correcta.
//ejemplo:
    //typeof("papa") // Prediccion: Vegetal // Actual: string

console.log(typeof(20))              //number               bn
console.log(typeof(true))            //boolean              bn
console.log("1" + "3")               //string (13)          bn 13
console.log("hamburgers" - "s")      //string (hamburger)   x NaN
console.log(typeof(95.5))            //number               bn
console.log(typeof(1!=2))            //boolean              bn
console.log("johnny" + 5)            //undefined            x johnny5
console.log(typeof(Nan))             //NaN                  NaN
console.log("1" - "3")               //undefined            x -2 
console.log("johnny" - 5)            //NaN                  NaN
console.log(typeof("hello"))         //string               bn
// console.log(hamburger" + "s")     //error                error
console.log(99 * "luftbaloons")      //NaN            NaN

//5. Convierte a mayuscula la frase "al que madruga Dios lo ayuda".

const texto = "al que madruga Dios lo ayuda";

console.log(texto.toUpperCase());

//6. Convierte a minuscula la frase "MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO".

const frase = "MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO"

console.log(frase.toLowerCase());

// 7. Se tiene las variables: 
//     a. const saludo = 'HoLa';
//     b. const saludo2 = 'mUnDo';
// Concatena las variables y realiza las transformaciones necesarias para imprimir
// en pantalla 'hola MUNDO'

const saludo = 'HoLa';
const saludo2 = 'mUnDo';

console.log(saludo.toLowerCase() + " " + saludo2.toUpperCase())


// 8. La cajera de un supermercado necesita implementar un algoritmo que le 
// imprima en pantalla el precio con descuento de un producto. Si el precio
// del producto es 100 y el porcentaje de descuento es 20%, el precio del 
// producto con descuento es 80. 
// El programa debe imprimir en pantalla: 
// Su producto tiene un precio de 80, el descuento fue del 20%.

const precio = 100;
const descuento = 20; 

function dcto() {
   return "Su producto tiene un precio de " + (precio - descuento) + ", el descuento fue del " + descuento + "%";     
}

console.log(dcto());

// 9.Obtener el valor de un promedio de cinco números.Una vez obtenido el valor,
// imprimir el resultado en pantalla.

const num = [4, 7, 2, 1, 6]; 
function promedio (){
    let suma = 0;
    for(let i = 0; i < num.length; i++){
    suma += num[i];
    }
     return suma/num.length; 
}
console.log(promedio());

// 10. Crear una variable con el valor del diámetro de un círculo. A Partir de 
// ese valor, calcular su perímetro. Por ultimo, imprimir en pantalla el resultado. 
// nota: La formula del perimetro se deba cargar en una constante 

const diametro = 4; 

const perimetro = () => {
  return diametro * Math.PI; 
}

console.log(perimetro());