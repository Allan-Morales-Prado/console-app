/**
 * Ejemplos de registro en consola
 *
 * @author Allan Morales
 * @version 1.0.0
 * @date 2026-02-06
 */

/**
 * Documentación breve:
 * - El programa muestra un menú por prompt y se repite hasta que el usuario elige "0".
 * - Cada operación matemática solicita dos números usando pedirNumero(), que valida cancelación,
 *   entrada vacía y valores no numéricos.
 * - Los resultados se guardan en el arreglo historial como objetos { tipo, operacion, resultado }.
 * - El historial puede consultarse (opción 5) o borrarse (opción 6) usando length = 0.
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
 * 
 * @param {string} ordinal - ordinal del número a pedir (ej. "primer", "segundo")
 * @returns {number|null} - número ingresado por el usuario o null si canceló
 */
function pedirNumero(ordinal) {
    while (true) {
        const input = prompt("Ingresa el " + ordinal + " número:");
        if (input === null) return null; // usuario canceló

        if (input.trim() === "") {
            alert("Entrada vacía. Debes ingresar un número.");
            continue;
        }

        const n = Number(input);
        if (!Number.isNaN(n)) return n;

        alert("Entrada inválida. Debes ingresar un número.");
    }
}

/**
 * Función para registrar la operación en el historial
 * @param {string} operacion - operación ingresada por el usuario
 * @param {number} resultado - resultado numérico de la operación
 * @param {string} tipo - tipo de operación (ej. "suma", "resta", etc.)
 */
function registrarOperacion(operacion, resultado, tipo) {
    historial.push({ tipo, operacion, resultado });
    console.log(++contadorRegistro + ": operación " + tipo + " registrada en historial");
}

/**
 * Función para mostrar el historial de operaciones
 */
function mostrarHistorial() {
    if (historial.length === 0) {
        alert("No hay operaciones registradas.");
        console.log(++contadorRegistro + ": Consulta de historial: No hay operaciones registradas.");
    } else {
        let mensaje = "Historial de operaciones:\n";
        historial.forEach((registro, index) => {
            mensaje += `${index + 1}. [${registro.tipo}] ${registro.operacion} = ${registro.resultado}\n`;
        });
        alert(mensaje);
        console.log(++contadorRegistro + ": Consulta de historial completada. Se registraron " + historial.length + " operaciones.");
    }
}

/**
 * Función para borrar el historial de operaciones
 * @param {{tipo:string, operacion:string, resultado:number}[]} arreglo - historial de operaciones matemáticas
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
    const num1 = pedirNumero("primer");
    if (num1 === null) return;
    console.log(++contadorRegistro + ": sumando " + num1);

    const num2 = pedirNumero("segundo");
    if (num2 === null) return;
    console.log(++contadorRegistro + ": sumando " + num2);

    const resultado = num1 + num2;
    registrarOperacion(`${num1} + ${num2}`, resultado, "suma");
    alert(`Operación: ${num1} + ${num2}\nResultado: ${resultado}`);
}

/**
 * Función para restar dos números
 */
function restar() {
    const num1 = pedirNumero("primer");
    if (num1 === null) return;
    console.log(++contadorRegistro + ": minuendo " + num1);

    const num2 = pedirNumero("segundo");
    if (num2 === null) return;
    console.log(++contadorRegistro + ": sustraendo " + num2);

    const resultado = num1 - num2;
    registrarOperacion(`${num1} - ${num2}`, resultado, "resta");
    alert(`Operación: ${num1} - ${num2}\nResultado: ${resultado}`);
}

/**
 * Función para multiplicar dos números
 */
function multiplicar() {
    const num1 = pedirNumero("primer");
    if (num1 === null) return;
    console.log(++contadorRegistro + ": factor " + num1);

    const num2 = pedirNumero("segundo");
    if (num2 === null) return;
    console.log(++contadorRegistro + ": factor " + num2);

    const resultado = num1 * num2;
    registrarOperacion(`${num1} * ${num2}`, resultado, "multiplicación");
    alert(`Operación: ${num1} * ${num2}\nResultado: ${resultado}`);
}

/**
 * Función para dividir dos números
 */
function dividir() {
    const num1 = pedirNumero("primer");
    if (num1 === null) return;
    console.log(++contadorRegistro + ": dividendo " + num1);

    const num2 = pedirNumero("segundo");
    if (num2 === null) return;
    console.log(++contadorRegistro + ": divisor " + num2);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        registrarOperacion(`${num1} / ${num2}`, resultado, "división");
        alert(`Operación: ${num1} / ${num2}\nResultado: ${resultado}`);
    } else {
        alert("Error: No se puede dividir entre cero.");
        console.error(++contadorRegistro + ": error al dividir entre cero");
    }
}