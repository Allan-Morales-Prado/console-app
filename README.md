# 🧮 JavaScript Console Calculator
[![es](https://img.shields.io/badge/lang-es-blue)](https://github.com/Allan-Morales-Prado/console-app/blob/main/README.es.md)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Platform](https://img.shields.io/badge/Platform-Browser-blue)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

![Repo Size](https://img.shields.io/github/repo-size/Allan-Morales-Prado/console-app)
![Last Commit](https://img.shields.io/github/last-commit/Allan-Morales-Prado/console-app)
![Issues](https://img.shields.io/github/issues/Allan-Morales-Prado/console-app)
![Stars](https://img.shields.io/github/stars/Allan-Morales-Prado/console-app?style=social)
![Forks](https://img.shields.io/github/forks/Allan-Morales-Prado/console-app?style=social)

---

## 📌 Description

Interactive application developed in **vanilla JavaScript**, executed in the **browser console**, allowing users to perform basic mathematical operations with input validation and operation history tracking.

This project was created as an academic exercise to demonstrate mastery of **JavaScript fundamentals**, code quality, and documentation practices.

---

## 🎯 Objectives

- Apply core JavaScript structures.
- Use reusable and modular functions.
- Implement robust input validation.
- Manipulate arrays and objects.
- Simulate conventional calculator behavior.

---

## ⚙️ Features

- Interactive menu:
  - ➕ Addition
  - ➖ Subtraction
  - ✖️ Multiplication
  - ➗ Division
- Input validation:
  - Rejects empty input
  - Rejects non-numeric input
  - Allows operation cancellation
- Division-by-zero prevention.
- Automatic logging of successful operations.
- View and clear operation history.
- Safe program exit.

---

## 🧱 Architecture

The application follows a **modular procedural approach**, clearly separating responsibilities such as:
- Input and validation
- Operation execution
- History management
- Main flow control

No external libraries or frameworks are used.

---

## 🧩 Key Components

### 📦 Custom Data Type

```js
/**
 * @typedef {{tipo: string, operacion: string, resultado: number}} Registro
 */

/** @type {Registro[]} */
const historial = [];
````

---

## 🔁 Application Flow

1. Welcome message.
2. Interactive menu.
3. Option selection.
4. Action execution.
5. Loop until exit.

---

## 🧪 Test Cases

| Case              | Result                |
| ----------------- | --------------------- |
| Empty input       | Retry                 |
| Non-numeric input | Retry                 |
| Cancel            | Operation aborted     |
| Division by zero  | Error, not logged     |
| Empty history     | Informational message |
| Clear history     | Confirmation          |
| Cancel clear      | History preserved     |

---

## 🧠 Best Practices

* Proper use of `let` and `const`
* Strict comparisons
* Guard clauses (early `return`)
* Code modularization
* JSDoc documentation
* Readable and maintainable code

---

## 🚀 Future Improvements

* History persistence with `localStorage`
* Additional mathematical operations
* Graphical interface (HTML/CSS)
* History export
* Refactor to Object-Oriented Programming (OOP)

---

## 🧑‍💻 Author

**Allan Morales Prado**
📍 Chile
🔗 GitHub: [https://github.com/Allan-Morales-Prado](https://github.com/Allan-Morales-Prado)

---

## 📄 License

This project is distributed for educational purposes.