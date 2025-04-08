# Ruby on Rails + React TODO App

A full-stack TODO application built with **Ruby on Rails** as the backend API and **React** as the frontend. This project showcases CRUD functionality with persistent data storage, demonstrating how **powerful and elegant Ruby** can be when combined with modern JavaScript frameworks.

![ScreenRecording2025-04-08at10 52 05-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/58a3f829-7ea8-41af-acd9-4f67a4a4bd20)

## 🔥 Features

- ✅ Create, Read, Update, and Delete TODO items  
- 🧠 Persistent data with SQLite (or your preferred DB)  
- 🔌 RESTful API using Ruby on Rails  
- ⚛️ React frontend with clean UI  
- 🚀 Easy to run locally

---

## 🛠️ Tech Stack

- **Backend**: Ruby on Rails API mode  
- **Frontend**: React (with Axios for API calls)  
- **Database**: SQLite (development)  
- **Tooling**: NPM

---

## 🧪 Setup & Installation

### 1. Backend (Rails API)

```bash
git clone https://github.com/your-username/rails-react-todo.git
cd rails-react-todo/backend

bundle install
rails db:create db:migrate
rails s
```

### 2. Frontend (React)

```bash
cd ../frontend
npm install
npm start
```

Or if using Yarn:

```bash
yarn install
yarn start
```

---

## 📦 API Endpoints

| Method | Endpoint                        | Description              |
|--------|---------------------------------|--------------------------|
| GET    | /api/todos                      | List all todos           |
| POST   | /api/todos                      | Create new todo          |
| PATCH  | /api/todos/:id/update_completed | Update completed status  |
| DELETE | /api/todos/:id                  | Delete todo              |


---

## 🚨 Note on Ruby

> Ruby is not just elegant — it's **powerful**, expressive, and productive. With Rails, building APIs becomes fast and fun, letting you focus more on logic and less on boilerplate.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
