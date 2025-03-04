//Creamos el objeto con los valores a los que accesaremos despues
const charactersOptions = {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    symbols: ['!', '#', '$', '%', '&', '/', '?', '*', '.', '_', '-'],
}

//Creamos las constantes que utilizaremos
const generatedPass = document.getElementById('password');
const copyIcon = document.getElementById('copy-icon')
const inputcharacters = document.getElementById('number');
const lengthBar = document.getElementById('barra'); 
const checkUppercase = document.getElementById('uppercase-checkbox');
const checkLowercase = document.getElementById('lowercase-checkbox');
const checkNumbers = document.getElementById('numbers-checkbox');
const checkSymbols = document.getElementById('symbols-checkbox');
const securityLevelcolor = document.getElementById ('security-level')
const securityShield = document.getElementById('shield');
const securityText = document.getElementById('security-text');
const button = document.getElementById('generate-button');

//Sacamos el numero de caracteres de la barra
lengthBar.addEventListener('input', () => {
    inputcharacters.innerText = lengthBar.value;
})

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedPass.innerHTML);
    document.getElementById('texto-copiado').classList.remove('hidden')
    setTimeout(() => {
        document.getElementById('texto-copiado').classList.add('hidden')
    }, 1500);
})

//Todo lo que va a pasar al apretar el boton
button.addEventListener('click', () => {
    //Usamos el valor de la barra para saber el tamaño de nuestra contraseña
    let passlength = parseInt (lengthBar.value);

    //En estas variables guardamos los caracteres que vamos a usar y la contraseña que imprimiremos
    let charactersToUse = [];
    let password = '';

    //Creamos condiciones para pasar datos al arreglo de los characteres a usar
    if (checkNumbers.checked === true) {
        charactersToUse = charactersToUse.concat(charactersOptions.numbers); //Usamos .concat para juntar arreglos
    };

    if (checkLowercase.checked === true) {
        charactersToUse = charactersToUse.concat(charactersOptions.lowercase);
    };

    if (checkUppercase.checked === true) {
        charactersToUse = charactersToUse.concat(charactersOptions.uppercase);
    };

    if (checkSymbols.checked === true) {
        charactersToUse = charactersToUse.concat(charactersOptions.symbols);
    };

    //Hacemos una condicion donde si no seleccionaron ninguna casilla, saldrá un alert diciendonos que seleccionemos al menos una casilla
    if (checkNumbers.checked === true || checkLowercase.checked === true || checkUppercase.checked === true || checkSymbols.checked === true) {

        //Hacemos un ciclo para elegir valores al azar del arreglo ya hecho con la cantidad de ciclos ingresada en passlenght
        for (let index = 0; index < passlength; index++) {
            
            //A ver si tiene sentido
            //Creamos la variable randomCharacter que va a tener el valor de el caracter dentro del arreglo characterToUse en la posicion del numero entero mas cercano (Math.floor) a la multiplicacion de un número aleatorio entre 0 y 1 (Math.random) multiplicado por la longitud del arreglo charactersToUse (charactersToUse.lenght) 
            const randomCharacter = charactersToUse[Math.floor(Math.random()*charactersToUse.length)];
            
            //Agregamos el caracter resultante a la variable password
            password += randomCharacter;
        }
        //Mostramos el icono de seguridad de la contraseña generada
        securityShield.classList.remove('hidden');

        //Validemos si que tan buena es la contraseña
        if (passlength > 12 && (checkSymbols.checked === true || checkNumbers.checked === true) && (checkUppercase.checked === true || checkLowercase.checked === true)) {
            securityLevelcolor.style.color = 'green';
            securityText.innerText = 'Segura';
        } else if (passlength > 8 && (checkSymbols.checked === true || checkNumbers.checked === true) && (checkUppercase.checked === true || checkLowercase.checked === true)) {
            securityLevelcolor.style.color = '#de9323';
            securityText.innerText = 'Seguridad media';
        } else if (passlength < 8 || (checkSymbols.checked === false && checkNumbers.checked === false)) {
            securityLevelcolor.style.color = 'red';
            securityText.innerText = 'Poco segura';
        } else {
            securityLevelcolor.style.color = 'red';
            securityText.innerText = 'Poco segura';
        }
    } else {
        alert ('Debes seleccionar por lo menos una casilla')
        securityText.innerText = '';
        if (securityShield.classList.contains('hidden') === false) {
            securityShield.classList.add ('hidden');
        }
    }

    //Imprimimos el valor de la password en la página
    generatedPass.innerText = password;
})
