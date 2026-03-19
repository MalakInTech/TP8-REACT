# TP React - Consommation d’API (fetch & axios)

## 📌 Description

Ce projet est une application développée avec **React.js** permettant de consommer une API externe.

Il met en pratique :
- Les requêtes HTTP avec `fetch()`
- L’utilisation de la librairie `axios`
- La gestion des états : chargement, données et erreurs
- L’affichage dynamique de données provenant d’une API

---

## 🛠 Technologies utilisées

- React.js
- JavaScript (ES6)
- Node.js
- npm
- Axios
- API REST (JSONPlaceholder)

---

## 📂 Structure du projet

- `App.js` : composant principal
- `FetchData.js` : récupération des données avec fetch()
- `AxiosData.js` : récupération des données avec axios
- `index.js` : point d’entrée



---

## ▶️ Exécution du projet

1. Créer le projet :

```bash
npx create-react-app tp-api
cd tp-api
```

2. Installer axios :

```bash
npm install axios
```

3. Lancer l’application :

```bash
npm start
```

4. Ouvrir dans le navigateur :  http://localhost:3000

---

## 🧪 Fonctionnement

Au lancement de l’application :

#### 🔹 FetchData

Récupère les articles depuis une API avec fetch()

Affiche un message de chargement

Affiche les 5 premiers titres des articles

#### 🔹 AxiosData

Récupère les utilisateurs avec axios

Affiche les noms et emails

Gère les erreurs et le chargement

---

## 📸 Captures d’écran

### 📌 Vue générale de l'application



