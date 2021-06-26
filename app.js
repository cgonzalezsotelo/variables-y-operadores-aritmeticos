// Exercise Two

// Se piden los números al usuario a través de un prompt y se utiliza parseInt para convertir el valor ingresado (string) a number.

let numberOne = prompt("Ingresa un numero mayor a cero");
numberOne = parseInt(numberOne);
let numberTwo = prompt("Ingresa otro numero mayor a cero");
numberTwo = parseInt(numberTwo);

// Se crean variables con las operaciones matematicas que se mostrarán al usuario.

let numberSumResult = numberOne + numberTwo;
let numberSubtractResult = numberOne - numberTwo;
let numberMultiplyResult = numberOne * numberTwo;
let numberDivideResult = numberOne / numberTwo;
let numberModuleResult = numberOne % numberTwo;

// Se imprime en consola el resultado de la operación.

console.log(`El resultado de la Suma es: ${numberSumResult}`);
console.log(`El resultado de la Resta es: ${numberSubtractResult}`);
console.log(`El resultado de la Multiplicación es: ${numberMultiplyResult}`);
console.log(`El resultado de la División es: ${numberDivideResult}`);
console.log(`El resultado del resto es: ${numberModuleResult}`);


// Exercise Three

// Se pide el valor (grados celsius) al usuario a través de un prompt y se utiliza parseInt para convertir el valor ingresado (string) a number.

let celsius = prompt("Ingresa el valor de la temperatura en grados celsius que quieres transformar");
celsius = parseInt(celsius);

// Se crean 2 constantes para setear los valores tanto de grados kelvin como fahrenheit.

const kelvin = 273.15;
const fahrenheit = 32;

// Se crean las operaciones matematicas para transformar de grados celisius a kelvin o fahrenheit.

let resultCelciusToKelvin = celsius + kelvin;
let resultCelciusToFahrenheit = (celsius * 9/5) + fahrenheit;

// Se imprime en consola el resultado de la transformación.

console.log(`El resultado a grados Kelvin es: ${resultCelciusToKelvin}`);
console.log(`El resultado a grados Fahrenheit es: ${resultCelciusToFahrenheit}`);

// Exercise Four

// Se pide al usuario ingresar valor = días y se utiliza parseInt para convertir string a number.

let daysUser = prompt( "Ingresa el número de días" );
daysUser = parseInt(daysUser);

// Se setean los valores equivalentes en días para Año, Semana y día.

const oneYear = 365;
const oneWeek = 7;
const oneDay = 1;

// Se calculan el resultado en base al valor ingresado por el usuario. 

let resultYear = (daysUser / oneYear);
let resultWeek = (daysUser % oneYear / oneWeek);
let resultDays = ((resultWeek * oneWeek / oneYear) * oneWeek);

// Se imprime en consola el resultados.

console.log(`${daysUser} días equivalen a: ${Math.floor(resultYear)} año/s, ${Math.floor(resultWeek)} semana/s y ${Math.floor(resultDays)} día/s.`)

// Exercise Five

// Se piden los 5 números al usuario a través de un prompt y se utiliza parseInt para convertir el valor ingresado (string) a number.

let numOne = prompt("Ingresa el primer número");
numOne = parseInt(numOne);
let numTwo = prompt("Ingresa el segundo número");
numTwo = parseInt(numTwo);
let numThree = prompt("Ingresa el tercer número");
numThree = parseInt(numThree);
let numFour = prompt("Ingresa el cuarto número");
numFour = parseInt(numFour);
let numFive = prompt("Ingresa el quinto número");
numFive = parseInt(numFive);

// Se crea una variable con la suma de todos los números ingresados por el usuario.

let sumNumbers = numOne + numTwo + numThree + numFour + numFive;

// Se imprime en consola el resultado de la suma los números y el promedio.

console.log(`La suma de todos los números es ${sumNumbers}`);
console.log(`El promedio de los números es ${sumNumbers / 5}`);

