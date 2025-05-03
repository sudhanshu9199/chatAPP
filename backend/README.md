# 🔐 Authentication Backend API

This is a basic **User Authentication API** built with **Node.js**, **Express**, and **MongoDB**. It provides endpoints for user registration, login, and logout using JWT-based authentication, password hashing, and secure cookie handling.

---

## 📁 Project Structure

backend/
├── src/
│ ├── controllers/
│ │ └── auth.controllers.js
│ ├── models/
│ │ └── user.models.js
│ ├── routes/
│ │ └── auth.routes.js
│ ├── config/
│ │ └── db.js
│ └── index.js (entry point - not shared yet)
├── .env
├── package.json

---

## 🚀 Features

- ✅ User Signup
- ✅ User Login
- ✅ User Logout
- 🔐 Password hashing using **bcryptjs**
- 🍪 Cookie handling with **cookie-parser**
- 🔑 Token-based auth using **jsonwebtoken**
- ☁️ Cloudinary integration (optional for profile pics)
- 🌐 Socket.IO support (for real-time features, if any)

---

## 🧩 Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- dotenv for environment management
- bcryptjs for password security
- jsonwebtoken for authentication
- cookie-parser for cookies
- cloudinary (optional)
- socket.io (future integration)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/backend.git
cd backend
npm install

🔗 API Endpoints

| Method | Route   | Description     |
| ------ | ------- | --------------- |
| POST   | /signup | Register a user |
| POST   | /login  | Login a user    |
| POST   | /logout | Logout a user   |

🧑‍💻 Author
Sudhanshu Ghosh – Chandigarh University