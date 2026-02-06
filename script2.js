/**
 * Ejemplos de registro en consola
 *
 * Demostración simple de varios métodos de consola y APIs del navegador
 *
 * @author Allan Morales
 * @version 1.0.0
 * @date 2026-02-06
 */

// Requerimientos generales
/**
 * Debe ejecutarse en la consola del navegador
 * Debe permitir al usuario ingresar datos mediante prompt o variables predefinidas
 * Debe realizar al menos tres operaciones diferentes usando funciones
 * Debe utilizar condicionales y estructuras de repetición
 * Debe incluir arreglos y objetos para almacenar y manipular datos
 */

// TO DO: El usuario puede realizar operaciones matemáticas básicas

alert("¡Hola! Bienvenido al programa de consola de JavaScript 😄");

let opcion;

do {
    opcion = prompt("Selecciona una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n0. Salir");
    switch (opcion) {
        case "1":
            sumar();
            break;
        case "2":
            restar();
            break;
        case "3":
            multiplicar();
            break;
        case "4":
            dividir();
            break;
        case "0":
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida.");
    }
} while (opcion != 0);

/**
 * Función para sumar dos números
 */
function sumar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert(`Operación ingresada: ${num1} + ${num2}\n Resultado: ${num1 + num2}`);
}

/**
 * Función para restar dos números
 */
function restar(){
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert(`Operación ingresada: ${num1} - ${num2}\n Resultado: ${num1 - num2}`);
}

/**
 * Función para multiplicar dos números
 */
function multiplicar(){
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert(`Operación ingresada: ${num1} * ${num2}\n Resultado: ${num1 * num2}`);
}

/**
 * Función para dividir dos números
 */
function dividir(){
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (num2 !== 0) {
        alert(`Operación ingresada: ${num1} / ${num2}\n Resultado: ${num1 / num2}`);
    } else {
        alert("Error: No se puede dividir entre cero.");
    }
}