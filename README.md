# 🚀 Angular LocalStorage Example

Aplicación desarrollada en **Angular 16** que demuestra el uso básico de **LocalStorage** para almacenar y recuperar información persistente en el navegador.

Incluye ejemplos para guardar datos simples y objetos JSON usando `JSON.stringify()` y recuperarlos con `JSON.parse()`.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v18+` *(preferiblemente v18.10.0)*
- 📦 **npm:** `v9+`
- 🅰️ **Angular CLI:** `v16.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-localStorage2
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Abrir:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

Proyecto simple basado en:

### 📦 AppComponent

Contiene:

- Guardado en LocalStorage
- Lectura desde LocalStorage
- Persistencia de strings
- Persistencia de objetos JSON

---

## ⚙️ Funcionalidades principales

- 💾 Guardar datos en LocalStorage
- 📤 Recuperar datos almacenados
- 🧾 Uso de `JSON.stringify()`
- 🔄 Uso de `JSON.parse()`
- 🖥️ Visualización mediante consola

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 16
- ⚡ TypeScript
- 🌐 LocalStorage API

---

## 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
```

---

## 🔥 Conceptos aprendidos

- Persistencia local del navegador
- Guardado de objetos complejos
- Conversión JSON → String
- Conversión String → JSON
- Manejo básico de almacenamiento web

---

## 📄 Licencia

Proyecto educativo para aprendizaje de persistencia local con Angular.
