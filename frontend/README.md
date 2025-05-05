# React + Vite
# Frontend 🧑‍💻🚀

This is the frontend of a modern React-based web application with routing, authentication, and a sleek UI powered by Tailwind CSS and DaisyUI. This project serves as the client-side interface of a full-stack application.

---

## 🛠 Tech Stack

- **React 19**
- **React Router DOM v7**
- **Tailwind CSS v4**
- **DaisyUI**
- **Axios**
- **Zustand (State Management)**
- **Vite (Bundler)**

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── signUpPage.jsx
│   ├── store/
│   │   └── useAuthStore.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── lib/
│       └── axios.js
```

---

## 🔐 Authentication Logic

Authentication is handled using **Zustand** and Axios to interact with a backend API.

- `checkAuth()` is triggered on app load to verify user session.
- Axios instance is preconfigured with `baseURL: http://localhost:3000/api` and `withCredentials: true` for cookie-based sessions.

---
## ⚙️ Scripts

To run the app:

```bash
npm install
npm run dev
```

---

## 🚦 Routing

The app uses React Router to manage navigation:

| Path         | Component        |
|--------------|------------------|
| `/`          | HomePage         |
| `/signup`    | SignUpPage       |
| `/login`     | LoginPage        |
| `/settings`  | SettingsPage     |
| `/profile`   | ProfilePage      |

---

## 📦 Dependencies

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.5",
  "axios": "^1.9.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hot-toast": "^2.5.2",
  "react-router-dom": "^7.5.3",
  "tailwindcss": "^4.1.5",
  "zustand": "^5.0.4"
},
"devDependencies": {
  "@eslint/js": "^9.22.0",
  "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "daisyui": "^5.0.35",
  "eslint": "^9.22.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19"
}
```

---

## ✨ Future Enhancements

- Responsive Navbar UI
- Protected Routes based on auth state
- Full authentication forms with validation
- Better page designs

---

## 🤝 Contributing

Feel free to fork this repo and enhance features, fix bugs, or improve the UI.

---

## 🧑‍💻 Author

Made with ❤️ by **Sudhanshu Ghosh**






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


