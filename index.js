//Practica 2 en JS

//Comparaciones y decisiones

/*Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
Instrucciones (pistas) para resolver el problema:
Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado. 
*/

let nota = Math.floor(Math.random() * 101);

if (nota === 0) {
    //Para asegurarme que el resultado nunca sea 0
    console.log(`Tu desempeño fué: No aprobatorio`);
    console.log(`Tu nota es: ${nota + 1}`); 
} else {
    if (nota <= 60) {
        console.log(`Tu calificación fué: No aprobatoria`);
        console.log(`Tu nota es: ${nota}`);
    } else if (nota <= 74) {
        console.log(`Tu desempeño fué: Suficiente`);
        console.log(`Tu nota es: ${nota}`);
    } else if (nota <= 89) {
        console.log(`Tu desempeño fué: Bueno`);
        console.log(`Tu nota es: ${nota}`);
    } else {
        console.log(`¡Felicidades! Tu desempeño fué: Excelente`);
        console.log(`Tu nota es: ${nota}`);
    }
}


