/**
 * Ejemplos de registro en consola
 *
 * Demostración simple de varios métodos de consola y APIs del navegador
 *
 * @author Allan Morales
 * @version 1.0.0
 * @date 2026-02-06
 */

alert("¡Hola! Bienvenido al programa de consola de JavaScript 😄");

let opcion;
const historial = [];
let contadorRegistro = 0;

do {
    opcion = prompt("Selecciona una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Mostrar historial\n6. Borrar historial\n0. Salir");
    console.log(++contadorRegistro + ": opción seleccionada: " + opcion);
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
        case "5":
            mostrarHistorial();
            break;
        case "6":
            borrarHistorial(historial);
            break;
        case "0":
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida.");
    }
} while (opcion !== "0");

/**
 * Función para mostrar el historial de operaciones
 */
function mostrarHistorial() {
    if (historial.length === 0) {
        alert("No hay operaciones registradas.");
        console.log(++contadorRegistro + ": Consulta de historial: No hay operaciones registradas.");
    } else {
        let mensaje = "Historial de operaciones:\n";
        historial.forEach((operacion, index) => {
            mensaje += `${index + 1}. ${operacion.operacion} = ${operacion.resultado}\n`;
        });
        alert(mensaje);
        console.log(++contadorRegistro + ": Consulta de historial completada. Se registraron " + historial.length + " operaciones.");
    }
}

/**
 * Función para borrar el historial de operaciones
 * @param {object[]} arreglo - historial de operaciones matemáticas
 */
function borrarHistorial(arreglo) {
    if (confirm("¿Estás seguro de que quieres borrar el historial?")) {
        arreglo.length = 0;
        alert("Historial borrado.");
        console.log(++contadorRegistro + ": Historial borrado.");
    }
}

/**
 * Función para sumar dos números
 */
function sumar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    console.log(++contadorRegistro + ": sumando " + num1);

    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    console.log(++contadorRegistro + ": sumando " + num2);

    alert(`Operación ingresada: ${num1} + ${num2}\n Resultado: ${num1 + num2}`);
    console.log(++contadorRegistro + ": resultado de la operación suma: " + (num1 + num2));
    historial.push(
        {
            operacion: `${num1} + ${num2}`,
            resultado: num1 + num2
        }
    );
    console.log(++contadorRegistro + ": operación suma registrada en historial");
}

/**
 * Función para restar dos números
 */
function restar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    console.log(++contadorRegistro + ": restando " + num1);
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    console.log(++contadorRegistro + ": restando " + num2);
    alert(`Operación ingresada: ${num1} - ${num2}\n Resultado: ${num1 - num2}`);
    console.log(++contadorRegistro + ": resultado de la operación resta: " + (num1 - num2));
    historial.push(
        {
            operacion: `${num1} - ${num2}`,
            resultado: num1 - num2
        }
    );
    console.log(++contadorRegistro + ": operación resta registrada en historial");
}

/**
 * Función para multiplicar dos números
 */
function multiplicar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    console.log(++contadorRegistro + ": multiplicando " + num1);
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    console.log(++contadorRegistro + ": multiplicando " + num2);
    alert(`Operación ingresada: ${num1} * ${num2}\n Resultado: ${num1 * num2}`);
    console.log(++contadorRegistro + ": resultado de la operación multiplicación: " + (num1 * num2));
    historial.push(
        {
            operacion: `${num1} * ${num2}`,
            resultado: num1 * num2
        }
    );
    console.log(++contadorRegistro + ": operación multiplicación registrada en historial");
}

/**
 * Función para dividir dos números
 */
function dividir() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    console.log(++contadorRegistro + ": dividiendo " + num1);
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    console.log(++contadorRegistro + ": dividiendo " + num2);
    if (num2 !== 0) {
        alert(`Operación ingresada: ${num1} / ${num2}\n Resultado: ${num1 / num2}`);
        console.log(++contadorRegistro + ": resultado de la operación división: " + (num1 / num2));
        historial.push(
            {
                operacion: `${num1} / ${num2}`,
                resultado: num1 / num2
            }

        );
        console.log(++contadorRegistro + ": operación división registrada en historial");
    } else {
        alert("Error: No se puede dividir entre cero.");
        console.log(++contadorRegistro + ": error al dividir entre cero");
    }
}