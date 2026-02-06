/**
 * Calculadora en consola (prompt/alert) con historial.
 * - Menú con do...while + switch
 * - Validación robusta de entrada
 * - Operaciones modularizadas y reutilizables
 * 
 * @author Allan Morales
 * @version 1.0.0
 * @date 2026-02-06
 */

alert("¡Hola! Bienvenido al programa de consola de JavaScript 😄");

let contadorRegistro = 0;

/** @type {string} */
let opcion;

/**
 *  @typedef {{tipo:string, operacion:string, resultado:number}} Registro
 */
/** @type {Registro[]} */
const historial = [];


do {
    opcion = prompt(
`Selecciona una opción:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Mostrar historial
6. Borrar historial
0. Salir`
);
    if (opcion === null) opcion = "0"; // Si cancela, ingresa null. Así que lo forzamos a que salga
    opcion = opcion.trim(); // "' 1 ' --> '1'"
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
 * @param {string} tipo - tipo de operación (ej. "suma", "resta", etc.)
 * @param {string} operacion - operación ingresada por el usuario
 * @param {number} resultado - resultado numérico de la operación
 */
function registrarOperacion(tipo, operacion, resultado) {
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
        return;
    }
    let mensaje = "Historial de operaciones:\n";
    historial.forEach((registro, index) => {
        mensaje += `${index + 1}. [${registro.tipo}] ${registro.operacion} = ${registro.resultado}\n`;
    });
    alert(mensaje);
    console.log(++contadorRegistro + ": Consulta de historial completada. Se registraron " + historial.length + " operaciones.");

}

/**
 * Función para borrar el historial de operaciones
 * @param {Registro[]} arreglo - historial de operaciones matemáticas
 */
function borrarHistorial(arreglo) {
    if (confirm("¿Estás seguro de que quieres borrar el historial?")) {
        arreglo.length = 0;
        alert("Historial borrado.");
        console.log(++contadorRegistro + ": Historial borrado.");
        return;
    }
    console.log(++contadorRegistro + ": Historial prevalece.");
}

/**
 * Ejecuta el flujo común de una operación binaria (2 números).
 * @param {object} config - Configuración de la operación binaria
 * @param {string} config.tipo - "suma", "resta", "multiplicación" o "división".
 * @param {string} config.simbolo - "+", "-", "*", "/"
 * @param {(a:number, b:number) => number} config.calcular - Función matemática básica
 * @param {(a:number, b:number) => string|null} [config.validar] - retorna mensaje de error o null si OK
 */
function ejecutarOperacion({ tipo, simbolo, calcular, validar }) {
    const operando1 = pedirNumero("primer");
    if (operando1 === null) return;
    console.log(++contadorRegistro + `: ${tipo} - primer número: ${operando1}`);

    const operando2 = pedirNumero("segundo");
    if (operando2 === null) return;
    console.log(++contadorRegistro + `: ${tipo} - segundo número: ${operando2}`);

    if (typeof validar === "function") {
        const error = validar(operando1, operando2);
        if (error) {
            alert(error);
            console.error(++contadorRegistro + `: ${tipo} - ` + error);
            return; // no registrar si hay error
        }
    }

    const resultado = calcular(operando1, operando2);
    const operacionTexto = `${operando1} ${simbolo} ${operando2}`;
    registrarOperacion(tipo, operacionTexto, resultado);
    alert(`Operación: ${operacionTexto}\nResultado: ${resultado}`);
}

/**
 * Función para sumar dos números
 */
function sumar() {
    ejecutarOperacion({
        tipo: "suma",
        simbolo: "+",
        calcular: (a, b) => a + b,
    });
}

/**
 * Función para restar dos números
 */
function restar() {
    ejecutarOperacion({
        tipo: "resta",
        simbolo: "-",
        calcular: (a, b) => a - b,
    });
}

/**
 * Función para multiplicar dos números
 */
function multiplicar() {
    ejecutarOperacion({
        tipo: "multiplicación",
        simbolo: "*",
        calcular: (a, b) => a * b,
    });
}

/**
 * Función para dividir dos números
 */
function dividir() {
    ejecutarOperacion({
        tipo: "división",
        simbolo: "/",
        validar: (_a, b) => (b === 0 ? "Error: No se puede dividir entre cero." : null),
        calcular: (a, b) => a / b,
    });
}