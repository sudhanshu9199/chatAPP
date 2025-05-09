# React + Vite

---

# MitraMilap 🗨️

A modern and elegant real-time messaging web application built with React, Lucide-React, and Tailwind CSS. MitraMilap provides seamless authentication, protected routes, dynamic UI components, responsive layout design, and customizable themes

---

# Frontend 🧑‍💻🚀

This is the frontend of a modern React-based web application with routing, Toast notifications and loading indicators, authentication, and a sleek UI powered by Tailwind CSS and DaisyUI. This project serves as the client-side interface of a full-stack application.

- Dynamic theming with persistent user preferences.
- Real-time chat support using Zustand store.
- Clean state-based UI rendering: ChatContainer / NoChatSelected.

---

## 🛠 Tech Stack

- **React 19**
- **React Router DOM v7**
- **Tailwind CSS v4**
- **DaisyUI**
- **Lucide React Icons**
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
│   │   ├── AuthImagePattern.jsx
│   │   ├── ChatContainer.jsx
│   │   ├── NoChatSelected.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── MessageInput.jsx
│   │   └── skeletons/
│   │       └── SidebarSkeleton.jsx
│   │       └── MessageSkeleton.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── signUpPage.jsx
│   ├── store/
│   │   └── useAuthStore.js
│   │   └── useThemeStore.js
│   ├── constants/
│   │   └── index.js
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

## Profile updates are handled with:
```js
await updateProfile({ profilePic: base64Image });
```
# and are followed by toast notifications and UI updates.

- `useChatStore` handles chat user list, messages, selected user.
- `useAuthStore` manages logged-in state and online user tracking.

```js
// Example ChatStore functions
getUsers();
getMessages(userId);
setSelectedUser(user);
```

- Online users are indicated with green status dot in sidebar.

---

## 🎨 Theme Management

- Users can personalize their chat interface by selecting from a variety of themes.
  - Themes are defined in **constants/index.js**:
    ```javascript
    export const THEMES = [ "light", "dark", "cupcake", ... ];
    ```
  - The selected theme is persisted using **localStorage**:
    ```javascript
        export const useThemeStore = create((set) => ({
      theme: localStorage.getItem("chat-theme") || "coffee",
      setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
      },
    }));
    ```
  - The **SettingsPage.jsx** provides a UI for theme selection and preview.

---

## 📁 Components Overview

- `AuthImagePattern.jsx`: Animated grid design with title/subtitle.
- `Navbar.jsx`: Dynamic nav items with Lucide icons.
- `LoginPage.jsx`: Form with validation, password toggle, toast, loader.
- `SignUpPage.jsx`: Validates full name, email, password.
- `ProfilePage.jsx`: Avatar upload, profile details, and account info section
- `SettingsPage.jsx`: Theme selection with live preview and chat interface simulation.
- `ChatContainer.jsx`: Displays chat messages with support for text and image messages.

- `ChatHeader.jsx`: Shows selected user's info and online status.

- `MessageInput.jsx`: Input field for sending text and image messages.

- `MessageSkeleton.jsx`: Skeleton loaders for chat messages.

---

## ⚙️ Scripts

To run the app:

```bash
git clone https://github.com/sudhanshu9199/mitramilap.git
cd mitramilap
npm install
npm run dev
```

---

## 🚦 Routing

The app uses React Router to manage navigation:
| Path        | Component        | Access Condition   |
|-------------|------------------|--------------------|
| `/`         | HomePage         | Authenticated only |
| `/login`    | LoginPage        | Guest only         |
| `/signup`   | SignUpPage       | Guest only         |
| `/settings` | SettingsPage     | Public             |
| `/profile`  | ProfilePage      | Authenticated only |

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
  "zustand": "^5.0.4",
  "lucide-react": "^0.507.0",
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

## 🔧 Features Added

### ✅ UI and UX
- Integrated **Lucide React Icons** for elegant UI components (`MessageSquare`, `User`, `Mail`, `Lock`, `Eye`, `EyeOff`, `Loader2`, etc.)
- Beautiful **login and sign-up pages** using `AuthImagePattern` with animated placeholders and modern grid layout.
- Fully responsive `Navbar` with conditional rendering for authenticated users.
- Stylish forms with icons and togglable password visibility.
- Sidebar with animated skeletons while loading users.
- **ChatContainer** and `NoChatSelected` render conditionally.
- Fully responsive layout.


### 🔐 Authentication & Routing
- Uses `useAuthStore` for managing login, signup, and logout.
- Protected routes:
  - `/` redirects based on `authUser` status.
  - `/login` and `/signup` blocked for logged-in users.
  - `/profile`, `/settings` are protected.
- Profile image upload using FileReader and base64
- Toast notifications for user actions (errors, login feedback, etc.).

### 🎨 Theme Customization
- Users can select from a variety of themes defined in **constants/index.js**.
- Selected theme is persisted using **localStorage**.
- Live preview of selected theme in **SettingsPage.jsx**.

### 🔄 Global UI Components
- `Toaster` from `react-hot-toast` added globally for feedback and alerts.
- Loader animations while login/signup actions are processing.


---

## 🤝 Contributing

PRs are welcome! Feel free to fork this repo and enhance features, fix bugs, or improve the UI. please open an issue first to discuss what you’d like to change.

---

## 🧑‍💻 Author

Made with ❤️ by **Sudhanshu Ghosh** — [GitHub](https://github.com/sudhanshu9199)

---

## 📄 License

This project is open-source and available under the MIT License.




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


