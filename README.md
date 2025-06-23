# 📝 Simple Notes API

A beginner-friendly RESTful API built with Node.js and Express to manage personal notes. It supports basic CRUD operations and stores data in a local JSON file.

---

## 📦 Features

- Create a new note  
- Get all notes  
- Get a specific note by ID  
- Update an existing note  
- Delete a note  

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- UUID for unique IDs
- File system (`fs`) for JSON storage

---

## 📁 Folder Structure
```
simple-notes-api/
├── data/
│   └── notes.json # Stores all notes
├── controllers/
│   └── notesController.js # Handles business logic
├── routes/
│   └── notes.js # Defines API routes
├── index.js # Main application entry point
└── package.json
```


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/simple-notes-api.git
cd simple-notes-api
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the server
```bash
npm  start
```
By default, the server runs on http://localhost:5000/api/notes

## 📬 API Endpoints

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/notes`     | Fetch all notes       |
| GET    | `/api/notes/:id` | Fetch a specific note |
| POST   | `/api/notes`     | Create a new note     |
| PUT    | `/api/notes/:id` | Update a note by ID   |
| DELETE | `/api/notes/:id` | Delete a note by ID   |

## 📌 Sample Note Object
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Meeting Notes",
  "content": "Discuss project roadmap and milestones."
}
```

## 🧪 Testing
You can test the API using tools like:

* [Postman](https://www.postman.com/)
* [Hoppscotch](https://hoppscotch.io/)



## 📄 License
This project is open-source and free to use for learning and development purposes.

