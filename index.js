//Practica 3 en JS

//Arreglos y ciclos

//Ejemplo de un ciclo while
let contador = 0;

while (contador < 5) {

    console.log(contador);
    
    contador++;

}

//Ejemplo de un ciclo for

let suma = 0;

for (let i = 1; i <= 10; i++) {

    suma += i;

}

console.log(suma);

//Ejemplo de un array

let numeros = [1, 2, 3, 4, 5]; 

//Ejercicio de clase
//FizzBuzz
//Es un ejercicio clásico de la programación que ayuda a mejorar el pensamiento lógico y la estructura de los bucles condicionales.
//La tarea consiste en escribir un programa en JS que recorra los número del 1 al 100 y siga las siguientes reglas
//Si un número es múltiplo de 3, imprime Fizz
//Si un número es múltiplo de 5, imprime Buzz
//Si un número es múltiplo de 3 y 5 imprime FizzBuzz
//Si un número no es múltiplo de 3 o 5, simplemente imprime el número

for(let index = 1; index <= 100; index ++) {
    if (index%3 === 0 && index%5 ===0) {
        console.log('FizzBuzz')
    }
    else if (index%3 === 0) {
        console.log('Fizz')
    }
    else if (index%5 === 0) {
        console.log('Buzz');
        
    }
    else {
    console.log(index);
    }
}


//Ejercicio de Campus
/*
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Implementar otra solución con el ciclo while.
 */

const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'manzana', 'uva', 'naranja', 'banana'];

const contadorFrutas = {};

for (let index = 0; index < frutas.length; index++) {
    const fruta = frutas[index];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas [fruta] = 1;
    }
}

const conteoFrutas = {};

let i = 0;
while (i < frutas.length) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas [fruta] = 1;
    }
    i ++;
}

console.log(contadorFrutas);
console.log(conteoFrutas);

