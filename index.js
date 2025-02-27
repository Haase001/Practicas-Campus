//Practica 5 en JS

//Objetos

//Ejercicio de Campus para practicar
/*
Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.
*/

const auto = {
    marca: 'Ford',
    modelo: 'Mustang',
    color: 'negro',

    //Método para mostrar la información
    mostrarinfo: function () {
        return `El auto es de la marca ${this.marca}, modelo ${this.modelo}, y lo tenemos disponible en color ${this.color}`
    }
}

console.log(auto.mostrarinfo());

//Ejercicio
/*
Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
 */

const informacion = function () {

    return `Libro: ${this.titulo} de ${this.autor} publicado en ${this.publicacion}. Actualmente el libro se encuentra: ${this.estado}`;
};

const listarcapitulos = function () {
    console.log('Capitulos de', this.titulo,':');
    this.capitulos.forEach((capitulo, index) => {
        console.log(`${index+ 1}. ${capitulo}`);
    });
}

const agregarCapitulo = function (nuevoCapitulo) {
    this.capitulos.push(nuevoCapitulo)
    console.log(`Nuevo capítulo ${nuevoCapitulo} agregado.`);
    console.log(this.listadecapitulos());
};

const agregarLibro = function () {
    //Agregamos un libro por medio de prompts
    let titulo = prompt("Ingresa el título del libro:");
    let autor = prompt("Ingresa el autor del libro:");
    let publicacion = prompt("Ingresa el año de publicación del libro:")
    let capitulos = [];
    let mostrarinfo = informacion;
    let listadecapitulos = listarcapitulos;
    let add = agregarCapitulo;
    // Creamos un nuevo objeto
    let nuevolibro = {
        titulo: titulo,
        autor: autor,
        publicacion: publicacion,
        capitulos: capitulos,
        estado: 'disponible',
        mostrarinfo: mostrarinfo,
        listadecapitulos: listadecapitulos,
        add: add,
    }
    //Agregamos a la libreria
    libreria.push(nuevolibro)
    console.log('Libro agregado:', nuevolibro.titulo);
}

const nuevaBusqueda = function () {
    const pregunta = prompt('Deseas hacer otra busqueda? si/no')
    if (pregunta === 'si') {
        librobuscado = prompt('Que libro estas buscando?')
        Busqueda (librobuscado)
    } else {
        alert('Gracias por usar nuestra aplicación')
    }
}

const libreria = [
    {
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupery',
        publicacion: 1943,
        capitulos: ['Introducción', 'El encuentro con el zorro', 'El asteroide B-612'],
        estado: 'disponible',
        mostrarinfo: informacion,
        listadecapitulos: listarcapitulos,
        add: agregarCapitulo,
    }
]

let librobuscado = prompt('Que libro estas buscando?')

function Busqueda (librobuscado) {
    for (let index = 0; index < libreria.length; index++) {
        if (librobuscado == libreria[index].titulo) {
            console.log(libreria[index].mostrarinfo());
            const listado = prompt('Deseas ver la lista de capítulos? si/no')
            if (listado === 'si') {
                console.log(libreria[index].listadecapitulos());
                setTimeout(()=>{
                    const preguntaListado = prompt('Estan todos los capítulos? si/no')
                    if (preguntaListado === 'no') {
                        let agregar = prompt('Escribe el siguiente capitulo que falta')
                        while (agregar) {
                            libreria[index].add(agregar)
                            agregar = prompt('Ingresa otro capítulo, o deja en blanco si ya no quieres agregar más capitulos')
                        }
                        console.log('Gracias por tu apoyo!')
                        nuevaBusqueda();
                    } else {
                        console.log('Gracias por tu apoyo!');
                        nuevaBusqueda();
                    }
                    }, 10000
                )
                break; 
            } else {
                nuevaBusqueda();
            }
        } else {
            alert('No encontramos el libro que buscas')
            const nuevaEntrada = prompt('Deseas agregar un libro a nuestra base de datos? si / no')
            if (nuevaEntrada === 'si') {
                agregarLibro()
                console.log('Gracias por tu apoyo');
                nuevaBusqueda();
                break;
            } else {
                nuevaBusqueda();
            }
        }
        
    }
}

Busqueda(librobuscado)