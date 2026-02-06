# 🧮 Calculadora de Consola en JavaScript

[![en](https://img.shields.io/badge/lang-en-orange)](https://github.com/Allan-Morales-Prado/console-app/blob/main/README.md)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Platform](https://img.shields.io/badge/Platform-Browser-blue)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

![Repo Size](https://img.shields.io/github/repo-size/Allan-Morales-Prado/console-app)
![Last Commit](https://img.shields.io/github/last-commit/Allan-Morales-Prado/console-app)
![Issues](https://img.shields.io/github/issues/Allan-Morales-Prado/console-app)
![Stars](https://img.shields.io/github/stars/Allan-Morales-Prado/console-app?style=social)
![Forks](https://img.shields.io/github/forks/Allan-Morales-Prado/console-app?style=social)

---

## 📌 Descripción

Aplicación interactiva desarrollada en **JavaScript puro** que se ejecuta en la **consola del navegador**, permitiendo realizar operaciones matemáticas básicas con validación de entradas y registro de historial.

Este proyecto fue diseñado como ejercicio académico para demostrar el dominio de los **fundamentos de JavaScript**, buenas prácticas de código y documentación.

---

## 🎯 Objetivos

- Aplicar estructuras fundamentales de JavaScript.
- Utilizar funciones reutilizables y código modular.
- Implementar validaciones robustas de entrada.
- Manipular arreglos y objetos.
- Simular el comportamiento de una calculadora convencional.

---

## ⚙️ Funcionalidades

- Menú interactivo:
  - ➕ Suma
  - ➖ Resta
  - ✖️ Multiplicación
  - ➗ División
- Validación de entradas:
  - Rechaza entradas vacías
  - Rechaza texto no numérico
  - Permite cancelar la operación
- Prevención de división por cero.
- Registro automático de operaciones exitosas.
- Visualización y eliminación del historial.
- Salida segura del programa.

---

## 🧱 Arquitectura

La aplicación sigue un enfoque **procedimental modularizado**, separando claramente responsabilidades como:
- Entrada y validación de datos
- Ejecución de operaciones
- Gestión del historial
- Control del flujo principal

No se utilizan frameworks ni librerías externas.

---

## 🧩 Componentes Clave

### 📦 Tipo de Dato Personalizado

```js
/**
 * @typedef {{tipo: string, operacion: string, resultado: number}} Registro
 */

/** @type {Registro[]} */
const historial = [];
````

---

## 🔁 Flujo de la Aplicación

1. Mensaje de bienvenida.
2. Menú interactivo.
3. Selección de opción.
4. Ejecución de la acción correspondiente.
5. Repetición hasta salir.

---

## 🧪 Casos de Prueba

| Caso              | Resultado             |
| ----------------- | --------------------- |
| Entrada vacía     | Reintenta             |
| Texto no numérico | Reintenta             |
| Cancelar          | Operación abortada    |
| División por cero | Error, no se registra |
| Historial vacío   | Mensaje informativo   |
| Borrar historial  | Confirmación          |
| Cancelar borrado  | Historial intacto     |

---

## 🧠 Buenas Prácticas

* Uso correcto de `let` y `const`
* Comparaciones estrictas
* Guard clauses (`return` temprano)
* Modularización del código
* Documentación con JSDoc
* Código legible y mantenible

---

## 🚀 Posibles Mejoras

* Persistencia con `localStorage`
* Nuevas operaciones matemáticas
* Interfaz gráfica (HTML/CSS)
* Exportación del historial
* Refactor a enfoque orientado a objetos (OOP)

---

## 🧑‍💻 Autor

**Allan Morales Prado**
📍 Chile
🔗 GitHub: [https://github.com/Allan-Morales-Prado](https://github.com/Allan-Morales-Prado)

---

## 📄 Licencia

Este proyecto se distribuye con fines educativos.