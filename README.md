# ✨ EpicBlogs — Full Stack Blog Platform

<div align="center">
  <!-- Badges -->
  <p>
    <a href="https://epicblogs-frontend.vercel.app/"><img src="https://img.shields.io/badge/Live-Website-green" alt="Live Website"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-Backend-green.svg" alt="Node.js"></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-API-black.svg" alt="Express"></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-Frontend-blue.svg" alt="React"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-Build-orange.svg" alt="Vite"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-Styling-blue.svg" alt="Tailwind"></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-Database-green.svg" alt="MongoDB"></a>
    <a href="https://render.com/"><img src="https://img.shields.io/badge/Backend-Render-purple.svg" alt="Render"></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Frontend-Vercel-purple.svg" alt="Vercel"></a>
  </p>
</div>

A modern **Full Stack Blog Platform** built using the **MERN Stack** that allows users to create, edit, delete and explore blogs with a beautiful UI and smooth user experience.

---

## ✨ Features

### 🌐 Frontend

- Built with **React + Vite + Tailwind CSS**
- Modern UI(Medium-style layout)
- 🌙 Dark Mode(persistent)
- 🔍 Search blogs instantly
- 📱 Fully responsive design
- ✨ Smooth animations using Framer Motion
- Infinite scroll for blog loading

---

### ⚙️ Backend

- **Node.js + Express.js API**
- **MongoDB Atlas** database
- JWT Authentication(Login/Signup)
- Secure protected routes
- Image upload support

---

### 📝 Blog System

- Create, edit, delete blogs
- Like & comment functionality ❤️💬
- Categories & tags support
- Author profile page
- Clickable author avatars
- Blog ownership protection(secure delete/edit)

---

### 👤 User Features

- User authentication
- Profile update(name, avatar, bio)
- Personalized blog ownership
- Avatar display across platform

---


## 📂 Project Structure

```
Full-Stack-Blog-Platform-EpicBlogs/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/arshadibrahim882/Full-Stack-Blog-Platform-EpicBlogs.git
cd Full-Stack-Blog-Platform-EpicBlogs
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run backend:

```bash
node server.js
```

> By default, Backend runs on: [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs on: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

### 🚀 Backend (Render)

Deploy backend folder on Render


Add environment variables:

MONGO_URI

JWT_SECRET


Set start command:
```bash
node server.js
```


### ⚡ Frontend (Vercel)

Create .env.production:

VITE_API_URL=https://backend-url.onrender.com/api

Then deploy using Vercel:

Framework: Vite

Build Command: npm run build

Output: dist


### 🌍 Live Links

- 🔗 Frontend: https://epicblogs-frontend.vercel.app
- 🔗 Backend: https://epicblogs-bckend.onrender.com


### 📡 API Endpoints

- Auth

POST /api/auth/signup

POST /api/auth/login


- Blogs

GET /api/blogs

POST /api/blogs

PUT /api/blogs/:id

DELETE /api/blogs/:id

PUT /api/blogs/like/:id

POST /api/blogs/comment/:id


- Users

GET /api/users/profile

PUT /api/users/profile


---


## 💡 Future Improvements

- 📌 Bookmark blogs
- 📊 Blog analytics (views, trends)
- 🔔 Notifications system
- ☁️ Cloudinary image upload
- 🧠 AI-based blog suggestions


---

## 📝 License

This project is licensed under the [MIT License](./LICENSE) © 2026 

[**Sheik Arshad Ibrahim**](https://github.com/arshadibrahim882) 


---

## 💬 Author

**Sheik Arshad Ibrahim**

GitHub: https://github.com/arshadibrahim882

LinkedIn: https://www.linkedin.com/in/sheik-arshad-ibrahim/

---