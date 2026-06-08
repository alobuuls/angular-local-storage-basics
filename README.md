<h1 align="center">💾 Angular Local Storage Basics</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/LocalStorage-Web_API-4285F4?logo=googlechrome&logoColor=white" alt="LocalStorage" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-local-storage-basics" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-local-storage-basics/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-local-storage-basics?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-local-storage-basics/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-local-storage-basics" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [💾 Angular Local Storage Basics](#-angular-local-storage-basics)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [💡 Concepts Learned](#-concepts-learned)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-local-storage-basics/

---

## 📖 Description

> [!NOTE]
> An Angular 16 application that demonstrates the fundamentals of Local Storage for persisting data in the browser.

The project shows how to store and retrieve primitive values and JSON objects using the Local Storage API, as well as the use of `JSON.stringify()` and `JSON.parse()` for data serialization and deserialization.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` *(recommended: v18 LTS)*
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`

### Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-local-storage-basics.git

cd angular-local-storage-basics
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a simple Angular architecture focused on demonstrating browser-side data persistence.

### 📦 App Component

Responsible for:

* Storing data in Local Storage
* Retrieving stored values
* Persisting strings
* Persisting JSON objects
* Displaying results through the browser console

---

## ✨ Features

* 💾 Store data in Local Storage
* 📤 Retrieve stored data
* 🧾 Use of `JSON.stringify()`
* 🔄 Use of `JSON.parse()`
* 📦 Object persistence
* ⚡ Browser-side storage
* 🖥️ Console-based output

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 16 | Front-End Framework |
| TypeScript | Application Logic |
| Local Storage API | Browser Persistence |
| JSON API | Data Serialization |

---

## 📁 Project Structure

```text
angular-local-storage-basics/

├── src/
│
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
│
├── main.ts
├── styles.css
├── index.html
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Concepts Learned

* Browser data persistence
* Local Storage API
* JSON serialization
* JSON deserialization
* Object storage and retrieval
* Client-side state persistence
* Angular component lifecycle basics

---

## 🎯 Project Goal

Practice and strengthen Angular fundamentals through the implementation of browser-based persistence using Local Storage.

Key concepts covered:

* Local Storage API
* Data Persistence
* JSON.stringify()
* JSON.parse()
* Angular Components
* TypeScript Fundamentals
* Browser Storage Mechanisms

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.