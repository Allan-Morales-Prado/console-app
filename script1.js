/**
 * Ejemplos de registro en consola
 *
 * Demostración simple de varios métodos de consola y APIs del navegador
 *
 * @author Allan Morales
 * @author GitHub Copilot (AI pair programming)
 * @version 1.0.0
 * @date 2026-02-02
 */

// Script simple de consola con mensajes
console.log("¡Hola, Mundo!");
console.log("Este es un script de consola sencillo");
console.log("Bienvenido a la aplicación de consola");

// También puedes registrar variables
let nombre = "JavaScript";
const version = "ES6+";
console.warn("'nombre' está obsoleto.");
console.log(`Aprendiendo ${nombre} - ${version}`);

// Números y cálculos
console.log("2 + 3 =", 2 + 3);
console.log("Hola".length, "caracteres");

// Objetos y arreglos
console.log({ mensaje: "Este es un objeto", activo: true });
console.log(["manzana", "banana", "naranja"]);

// Ejemplo de error en consola
console.error("¡Ocurrió un error!");
console.error("Código de error:", 404);

// Ejemplo de tabla en consola
const usuarios = [
  { id: 1, nombre: "Alicia", edad: 25 },
  { id: 2, nombre: "Roberto", edad: 30 },
  { id: 3, nombre: "Carlos", edad: 28 }
];
console.table(usuarios);

// Ejemplo de prompt (descomentar para usar en navegador)
const entradaUsuario = prompt("Ingresa tu nombre:");
console.log("Usuario ingresó:", entradaUsuario);

// Ejemplo de alerta (descomentar para usar en navegador)
alert("¡Este es un mensaje de alerta!");

// Mensaje final
console.log("¡Ejecución del script completa!");

// Ejemplo de asignación de valores desde entrada de usuario
/** @type {string} */
let valorNumero1;
/** @type {string} */
let valorNumero2;

// Conversión a enteros (manejo de división por cero más abajo)
const numero1 = parseInt(valorNumero1);
const numero2 = parseInt(valorNumero2);

// Bloque switch para selección de operación
const operacion = prompt("Seleccione operación: 'sumar', 'restar', 'multiplicar', 'dividir':");

switch (operacion) {
  case "sumar":
    console.log(`Resultado: ${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case "restar":
    console.log(`Resultado: ${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case "multiplicar":
    console.log(`Resultado: ${numero1} × ${numero2} = ${numero1 * numero2}`);
    break;
  case "dividir":
    if (numero2 !== 0) {
      console.log(`Resultado: ${numero1} ÷ ${numero2} = ${numero1 / numero2}`);
    } else {
      console.error("¡No se puede dividir por cero!");
    }
    break;
  default:
    console.warn("¡Operación inválida seleccionada!");
}

// Ejemplos de arreglos y bucles
const arreglo = ["manzana", "banana", "naranja"];

console.log("bloque for");
for (let indice = 0; indice < arreglo.length; indice++) {
    console.log(`Elemento ${indice}: ${arreglo[indice]}`);
}
console.log("bucle for completado\n");

console.log("bucle for-of");
for (const elemento of arreglo) {
    console.log(elemento);
}
console.log("bucle for-of completado\n");

console.log("bucle for-in");
for (const indiceIn in arreglo) {
    console.log(`Índice ${indiceIn}: ${arreglo[indiceIn]}`);
}
console.log("bucle for-in completado\n");

console.log("bucle while");
let indiceWhile = 0;
while (indiceWhile < arreglo.length) {
    console.log(`Elemento ${indiceWhile}: ${arreglo[indiceWhile]}`);
    indiceWhile++;
}
console.log("bucle while completado\n");

console.log("bucle do-while");
let contadorDoWhile = 0;
do {
    console.log(`Elemento ${contadorDoWhile}: ${arreglo[contadorDoWhile]}`);
    contadorDoWhile++;
}while (contadorDoWhile < arreglo.length);
console.log("bucle do-while completado\n");

// Ejemplo de filtrado de arreglos
console.log("Ejemplo de filtrado de arreglos");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log("Números pares:", numerosPares);

// Filtrar números mayores que 5
const mayoresQueCinco = numeros.filter((num) => num > 5);
console.log("Números mayores que 5:", mayoresQueCinco);

// Filtrar nombres de frutas con longitud > 5
const frutas = ["manzana", "banana", "naranja", "kiwi", "mango"];
const nombresFrutasLargos = frutas.filter((fruta) => fruta.length > 5);
console.log("Frutas con nombre de longitud > 5:", nombresFrutasLargos);
console.log("Ejemplo de filtrado de arreglos completado\n");

// Ejemplos de funciones
function sumar(a, b) {
  return a + b;
}
console.log("Suma de 5 y 3:", sumar(5, 3));

const restar = function(a, b) {
    return a - b;
}
console.log("Resta de 5 y 3:", restar(5, 3));

const multiplicar = (a, b) => a * b;
console.log("Producto de 5 y 3:", multiplicar(5, 3));

const dividir = (a, b) => {
  if (b === 0) {
    console.error("¡No se puede dividir por cero!");
    return null;
  }
  return a / b;
};
console.log("División de 5 y 3:", dividir(5, 3));

const infoCodigo = {
    autores: [
        {
            nombre: "Allan",
            rol: "Desarrollador Front-end"
        },
        {
            nombre: "GitHub Copilot",
            rol: "Asistente IA"
        }
    ],
    version: "1.0",
    descripcion: "Una aplicación de consola JavaScript sencilla"
}

// Ejemplo forEach con infoCodigo
console.log("Ejemplo forEach con infoCodigo");
infoCodigo.autores.forEach((autor, indiceAutor) => {
    console.log(`Autor ${indiceAutor + 1}: ${autor.nombre} - ${autor.rol}`);
});
console.log("Ejemplo forEach completado\n");

// Ejemplo map con infoCodigo
console.log("Ejemplo map con infoCodigo");
const nombresAutores = infoCodigo.autores.map((autor) => autor.nombre);
console.log("Nombres de autores:", nombresAutores);

const rolesAutores = infoCodigo.autores.map((autor) => ({
    nombre: autor.nombre,
    rol: autor.rol.toUpperCase()
}));
console.log("Roles de autores (mayúsculas):");
console.table(rolesAutores);
console.log("Ejemplo map completado\n");