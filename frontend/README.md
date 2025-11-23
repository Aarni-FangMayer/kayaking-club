# 🌊 Kayaking Club "River Pulse"

**River Pulse** is a web project for a small kayaking club based in Canada.  
The website combines two main functionalities:  
- **Tour booking system** for available kayaking routes.  
- **Community blog** for members to share and discuss updates.

The goal of the project is to unite people who are passionate about kayaking, outdoor activities, and nature exploration.  
It serves both as an informative platform and a community hub for adventure lovers.

---

## 🚀 Project Overview

The website includes the following main pages:
- **About** — information about the club, mission, and activities.  
- **Routes & Prices** — a list of tours available for booking.  
- **Our Blog** — latest club news and articles with commenting functionality.  
- **User Account** — displays booked tours and allows users to edit their account details.  
- **Admin Page** — available only for administrators to manage tours and blog posts.

User authentication is implemented with **role-based access** (Admin / User).

The website design was inspired by the  
[**Ireland Tours Travel Website Concept**](https://www.behance.net/gallery/79401133/Ireland-Tours-Travel-Website-Concept),  
but reworked and customized to fit the kayaking club’s theme and needs.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React + Vite  
- **UI Library:** PrimeReact (only one component used — most are custom-built)  
- **Routing:** React Router  
- **Custom Hooks:** `useIsMobile`  
- **State Management (planned):** Redux  
- **HTTP Client (planned):** Axios  

---
## 🔐 Authentication Context
The frontend uses a **React Context** to manage authentication state across the application.

---

## 📁 Project Structure
```

src/
├── assets/                                 # Images, icons, and other static assets
├── components/                             # Reusable UI components
│ ├── buttons/
│ ├── cards/
│ ├── forms/
│ ├── layouts/
│ ├── lists/
│ ├── modals/
│ ├── navigation/
│ ├── shared/
│ ├── sliders/
│ └── ui/
├── contexts/                              # React Contexts for state management (e.g., Auth)
├── hooks/                                 # Custom React hooks
├── pages/                                 # Page-level components
├── providers/                             # Context providers and global state wrappers                                  
├── App.jsx                                # Root component
└── main.jsx                               # Entry point for React app

```


The structure will continue evolving as new features are added.

---

## ⚙️ Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Aarni-FangMayer/kayaking-club.git
   cd frontend
   ```
2. Install dependencies:
   ```bash
    npm install
    ```
3. Run the development server:
   ```bash
    npm run dev
    ```
Environment variables (.env) will be added in future updates.

## 🔗 Backend Integration
The frontend communicates with the backend REST API for dynamic data management:

- User Authentication: login, register, role-based access

- Tours: fetching tour list, booking, canceling

- Blogs: fetch blogs, add comments, like posts

- Protected routes: only accessible for authorized users

The backend server should be running at http://localhost:3001 for full functionality.

## 🧩 Architecture & Code Style

Uses BEM methodology for CSS class naming.

Code is modular and divided into small reusable components.

Emphasis on clean, maintainable, and scalable structure.

## 🌐 Deployment

The frontend is deployed and fully integrated with the backend: [https://kayaking-club.onrender.com/](https://kayaking-club.onrender.com/)

The deployment includes:  
- React + Vite frontend  
- Connected to backend REST API for tours, blogs, and authentication  
- JWT-based authentication for protected routes

Planned hosting options: custom domain hosting


## 👨‍💻 Development & Contribution

This project is individually developed from scratch — from design in Figma to deployment.
Currently, external contributions are not planned.

## 🔮 Future Plans

Planned future improvement: custom domain hosting


## 📄 License

This project is an original work created by Aarni-FangMayer for educational and portfolio purposes.
All code, design elements, and content were developed independently.
You are welcome to view and learn from the project, but copying, redistribution, or commercial use of the materials without permission is prohibited.

© 2025 Aarni-FangMayer. All rights reserved.


### 💬 Author

Developer: Aarni-FangMayer

Email: aarni.fangmayer@gmail.com

GitHub: https://github.com/Aarni-FangMayer