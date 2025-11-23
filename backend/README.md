# KayakingClub Backend
**KayakingClub Backend** is the server-side application for the River Pulse kayaking club project.  
It provides a REST API to manage tours, users, and blogs, handling authentication, authorization, and data persistence.  

This backend enables the frontend application to:  
- Authenticate users with **JWT** and manage roles (Admin / User).  
- Handle **tour management**, including CRUD operations for admins, booking and canceling tours for users, and fetching booked users.  
- Handle **blog management**, including CRUD operations for admins, comments, and likes from authorized users.  
- Secure sensitive information with **bcrypt** for password hashing and **role-based access control**.  

It serves as the backbone of the project, ensuring reliable data flow, security, and integration between frontend and database (MongoDB).

## Project Overview
Backend for KayakingClub monorepo, providing:
- User management (registration, login, roles: admin/user)
- Tour management (CRUD, booking/canceling tours)
- Blog management (CRUD, comments, likes)
- JWT authentication and role-based access control

## Features
- **Users:** registration, login, role assignment, booked tours retrieval
- **Tours:** CRUD (admin only), booking/canceling tours, fetch users booked (admin only)
- **Blogs:** CRUD (admin only), comments, likes
- **Authentication:** JWT-based
- **Authorization:** Admin vs. user
- **Security:** bcrypt for password hashing

## Tech Stack
- Node.js v22.13.0
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- CORS (proxy handled via Vite frontend)
- Nodemon for development


## Project Structure
```
backend/
|-- controllers/
|   |-- blogs.js
|   |-- login.js
|   |-- tours.js
|   `-- users.js
|-- models/
|   |-- blog.js
|   |-- tour.js
|   `-- user.js
|-- utils/
|   |-- config.js
|   |-- logger.js
|   `-- middleware.js
|-- dist/                    # Frontend build copied here
|-- .env
|-- app.js
|-- index.js
|-- package.json
`-- package-lock.json

```

## Models (examples)
### User
```json
{
  "_id": "691646f10877d0a0056e2723",
  "username": "222",
  "email": "222",
  "passwordHash": "$2b$10$Yil7J8mCISp2rqdUHUnv2...",
  "phone": "222",
  "role": "user",
  "tours_id": ["6911f420a5435585d6dd617a", "6912120428a1868d60c5a23e"],
  "__v": 3
}
```

### Tour
```json
{
  "_id": "691210e4dd61f436e60dd01d",
  "name": "Ottawa River Rush",
  "subtitle": "For those craving adrenaline...",
  "description": "Get ready for an exhilarating ride...",
  "difficulty": "middle",
  "dateOfTrip": "20 july",
  "included": "instructor, photo",
  "forBeginners": "no",
  "duration": "1 day",
  "price": 970,
  "image": "https://cdn.britannica.com/65/126065-050-B73FC50D/hotel-Ottawa-River-F...",
  "accountId": ["691646f10877d0a0056e2723", "691640360877d0a0056e2721"],
  "__v": 2
}
```
### Blog
```json
{
  "_id": "6920feaef868f2be056ccc79",
  "title": "Test Blog 1",
  "subtitle": "Test Blog 1",
  "text": "Test Blog 1",
  "description": "Test Blog 1",
  "likes": ["691646f10877d0a0056e2723"],
  "commentObject": [
    {
      "user_id": "691646f10877d0a0056e2723",
      "username": "222",
      "comment_date": "2025-11-22T00:51:10.139Z",
      "comment_text": "1",
      "comment_likes": 0,
      "comment_id": "1763772670181"
    }
  ],
  "__v": 3
}
```

## API Overview

### /api/login
- **POST**: Authenticate user, returns JWT

### /api/users
- **GET**: Fetch all users (admin only)
- **POST**: Create new user
- **GET** `/me/tours`: Fetch current user's booked tours

### /api/tours
- **GET**: Fetch all tours
- **GET** `/:id`: Fetch single tour
- **POST**, **PUT**, **DELETE**: Admin only
- **POST** `/:id/book`: Book a tour
- **DELETE** `/:id/book`: Cancel booking
- **GET** `/:id/booked`: Fetch users who booked the tour (admin only)

### /api/blogs
- **GET**: Fetch all blogs
- **GET** `/:id`: Fetch single blog
- **POST**, **PUT**, **DELETE**: Admin only
- **POST** `/:id/comments`: Add comment to a blog
- **PUT** `/:id/like`: Add like to a blog


## Environment Variables
MONGODB_URI – MongoDB connection string

PORT – backend server port

SECRET – JWT secret key

## Middleware
authenticate – verifies JWT

checkAdmin – ensures admin privileges

## Running Locally
```json
npm install
npm run dev   # nodemon
```

## Build & Deployment
1. Build frontend (vite build)

2. Copy dist folder to backend/dist

3. Start backend (npm run dev or production server)

4. Deploy to Render (or other hosting)

## Notes
CORS is enabled but a proxy via Vite frontend is used.

JWT authentication required for protected routes.

Admin-only routes enforced via checkAdmin middleware.

## Frontend
The frontend application for this project is located [here](https://github.com/Aarni-FangMayer/kayaking-club/tree/main/frontend).
