# 🌊 KayakingClub Monorepo
**KayakingClub** is a web project for a small kayaking club based in Canada, combining a **tour booking system** and a **community blog**.


This monorepo contains two main applications:
1. **Frontend** — React + Vite web application
2. **Backend** — Node.js + Express REST API

---

## 📂 Project Structure
```
KayakingClub/
├── frontend/ # React frontend application
├── backend/ # Node.js backend application
└── README.md # This file
```

---

## 🚀 Features
- User authentication & role-based access (Admin / User)
- Tour management: view, book, cancel tours
- Blog management: create, comment, like posts
- Admin-only pages for managing tours and blogs
- JWT-based security and data protection
- Full integration between frontend and backend

---

## 🛠️ Tech Stack

**Frontend:** React, Vite, PrimeReact, React Router  
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, dotenv

---

## 🔗 Links

- **Frontend:** [KayakingClub Frontend](https://github.com/Aarni-FangMayer/kayaking-club/tree/main/frontend)  
- **Backend:** [KayakingClub Backend](https://github.com/Aarni-FangMayer/kayaking-club/tree/main/backend)

---

## ⚙️ Running Locally
1. Clone the repository:
```bash
   git clone https://github.com/Aarni-FangMayer/kayaking-club.git
```
2. Install dependencies for backend and frontend:
```bash
   cd backend
   npm install
   cd ../frontend
   npm install
```
3. Run backend (port 3001):
```bash
   cd backend
   node index.js
```
4. Run frontend (with Vite):
```bash
   cd frontend
   npm run dev
```

---

## 📄 License
This project is an original work created by Aarni-FangMayer for educational and portfolio purposes.
All code, design elements, and content were developed independently.

## 👨‍💻 Author
Developer: Aarni-FangMayer

Email: aarni.fangmayer@gmail.com

GitHub: https://github.com/Aarni-FangMayer