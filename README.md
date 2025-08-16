# 🦸 Marvel Universe App

![marvel_logo](https://github.com/user-attachments/assets/09760bcb-e401-45f8-a6e6-9c1ff735285a)


A **React + Express** app to manage Marvel characters. Users can **view, add, edit, delete, and filter** characters from a table. Data is stored in a JSON file on the backend.

---

## 🚀 Features

- Display a table of Marvel characters:
  - ID
  - Name
  - Real Name
  - Universe
- Add new characters
- Edit existing characters
- Delete characters
- Filter characters by name
- Responsive design with **Tailwind CSS**
- Simple, clean UI

---

## 📂 Project Structure

/frontend
/src
/components
CharacterForm.jsx
CharactersTable.jsx
Filter.jsx
App.jsx
main.jsx
api.js
index.html
/server
server.js
characters.json

---

## 🛠 Requirements

- Node.js >= 18
- npm or yarn
- Modern browser

---

## ⚡ Installation

1. **Clone the repo**

git clone <your-repo-url>
cd marvel-universe

2. **Install backend dependencies**

cd server
npm install express


3. **Install frontend dependencies**


cd ../frontend
npm install


4. **Start backend server**


cd ../server
node server.js


5. **Start frontend development server**

 
cd ../frontend
npm run dev


6. **Open in browser**

http://localhost:5173

---

## 💻 Usage

Use the search input to filter characters.

Fill the form to add a new character.

Click Edit to modify a character.

Click Delete to remove a character.
