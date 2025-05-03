
# 🔐 Authentication Backend API

This is a basic **User Authentication API** built with **Node.js**, **Express**, and **MongoDB**. It includes user registration, login, and logout functionalities using **JWT-based authentication**, **secure password hashing**, and **cookie-based session management**.

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── auth.controllers.js
│   ├── models/
│   │   └── user.models.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── lib/
│   │   └── utils.js
│   ├── config/
│   │   └── db.js
│   └── index.js
├── .env
├── package.json
```

---


## 🚀 Features

- ✅ User Signup with full name, email, and password
- ✅ Secure Login with password validation
- ✅ Secure Logout with cookie invalidation
- 🔐 Password hashing using **bcryptjs**
- 🔑 JWT-based authentication using **jsonwebtoken**
- 🍪 Secure cookies with:
  - `httpOnly: true` – blocks JS access (XSS protection)
  - `sameSite: strict` – prevents CSRF
  - `secure: true/false` – based on environment
- 🌫️ Modular structure for easy scalability

- ☁️ Cloudinary integration (optional for profile pics)
- 🌐 Socket.IO support (for real-time features, if any)

---

## ⚙️ Signup Validations

- ❌ Returns error if **any field is missing**
- ❌ Returns error if **password < 3 characters**
- ❌ Returns error if **email is already registered**

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
```

Create a `.env` file with:
```
PORT=4003
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## 🔗 API Endpoints

| Method | Route     | Description         |
|--------|-----------|---------------------|
| POST   | /signup   | Register a new user |
| POST   | /login    | Authenticate a user |
| POST   | /logout   | Clear auth session  |

---

## ✍️ Author

**Sudhanshu Ghosh** – BCA Student at Chandigarh University  
🚀 _Aspiring Full Stack Developer & Problem Solver_