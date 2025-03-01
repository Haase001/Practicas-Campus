const color1 = document.getElementById('color1');
const color2 = document.getElementById('titulo');
const color3 = document.getElementById('boton');
const hex = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]

function asignarColores ( C3, C2, C1) {
    color1.setAttribute('style', `background-color: ${C3};`)
    color2.setAttribute('style', `color: ${C2};`)
    color3.setAttribute('style', `background-color: ${C1};`)
}

function crearColoresHex () {
    let color = '';
    for (let i = 0; i < 6; i++) {
        const element = hex [Math.floor(Math.random()*15)];
        color += element
    }
    return `#${color}`;
}

color3.addEventListener('click', () =>{
        const element1 = crearColoresHex ();
        const element2 = crearColoresHex ();
        const element3 = crearColoresHex ();
        while (element1 === element2 || element1 === element2 || element2 === element3) {
                element1 = crearColoresHex()
                element2 = crearColoresHex()
                element3 = crearColoresHex()
                console.log('Mira tu! Salieron colores iguales. Cual es la probabilidad?');
                
        }
    asignarColores(element1, element2, element3)
})