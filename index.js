//Practica 4 en JS

//Funciones

/*
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/

const librosLeidos= [];

//Uso un prompt para hacerlo mas interactivo
let libros = prompt('Ingresa el nombre de un libro que hayas leido')

function agregarLibro (titulo) {
    
    //Usaré un while ya que no se cuantos libros ingresará el usuario 

    while (titulo) { 
    
        librosLeidos.push(titulo)
        
        //Cambio el valor de titulo con otro prompt y agrego una instruccion para que el usuario termine el bucle
        titulo = prompt('Ingresa el nombre de otro libro que hayas leido,si te quedas sin titulos o te cansas, deja la casilla en blanco')
    
        //Un extra que valide si repetimos un titulo
        for (let index = 0; index < librosLeidos.length; index++) {
            
            if (titulo === librosLeidos[index]) {
                
                titulo = prompt('Ya incluiste ese libro, escribe otro título, o si ya no tienes mas títulos, dejalo en blanco')
            }
            
        }
    
    }

}

agregarLibro (libros)

//La siguiente funcion mostrará una lista de los titulos leidos que hayan ingresado

function mostrarLibrosLeidos () {
    console.log(`Los libros que has leído son:`);
    librosLeidos.forEach((libro, index) => {
        console.log(`${index+ 1}. ${libro}`);
    })
}

mostrarLibrosLeidos ()
