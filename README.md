# React + Express JWT Authentication Application

## Overview

This project is a full-stack authentication application built with React and Express.js. Users can register, log in, and access protected content using JSON Web Tokens (JWT). Passwords are securely hashed using bcrypt.

The application also includes role-based authorization with a separate admin view that can only be accessed by users with the admin role.

## Features

### Authentication

- User registration
- User login
- Password hashing using bcryptjs
- JWT token generation
- JWT verification middleware
- Logout functionality

### Authorization

- Protected user dashboard
- Admin-only route
- Admin-only frontend view
- Role-based access control

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- Express.js
- JSON Web Tokens
- bcryptjs
- CORS
- dotenv

## Project Structure

### Frontend

```text
frontend/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── UserView.jsx
│   │   └── AdminView.jsx
│   ├── routes/
│   │   ├── ProtectedRoute.jsx
│   │   ├── PublicRoute.jsx
│   │   └── AdminRoute.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

### Backend

```text
backend/
├── middleware/
│   └── auth.js
├── routes/
│   ├── register.js
│   ├── login.js
│   ├── dashboard.js
│   └── admin.js
├── userStore.js
├── package.json
├── server.js
└── .env
```

## Installation

### Clone the repository

```bash
git clone https://github.com/shinymeganium/auth.git
```

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Required packages:

```bash
npm install express jsonwebtoken bcryptjs cors dotenv
```

Start the server:

```bash
node server.js
```

or

```bash
npm run dev
```

## Frontend Setup

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Required packages:

```bash
npm install axios react-router-dom
```

Start development server:

npm run dev

## Environment Variables

Create a `.env` file in the backend root directory.

```env
JWT_SECRET=your_secret_key_here
PORT=3000
```

## API Endpoints

### Register User

```http
POST /register
```

Request:

```json
{
  "email": "user@test.com",
  "password": "password123"
}
```

Response:

```json
{
  "message": "User created"
}
```

### Login

```http
POST /login
```

Request:

```json
{
  "email": "user@test.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token",
  "role": "user"
}
```

### Dashboard

Protected route.

```http
GET /dashboard
```

Required header:

```http
Authorization: Bearer <token>
```

Response:

```json
{
  "message": "welcome",
  "user": {
    "email": "user@test.com",
    "role": "user"
  }
}
```

### Admin

Protected route.

```http
GET /admin
```

Required header:

```http
Authorization: Bearer <token>
```

Admin users only.

Response:

````json
{
  "message": "Welcome admin"
}




## Authentication Flow

1. User registers an account.
2. Password is hashed using bcrypt.
3. User logs in.
4. Credentials are verified.
5. JWT token is generated.
6. Token is returned to frontend.
7. Frontend stores token in localStorage.
8. Protected requests include token in Authorization header.
9. JWT middleware verifies token.
10. Access is granted or denied.



## Authorization Flow

Users have a role property:

```javascript
{
  email: "user@test.com",
  role: "user"
}


or

```javascript
{
  email: "admin@test.com",
  role: "admin"
}


The JWT stores the user's role.

Protected admin routes use authorization middleware to verify:

```javascript
req.user.role === "admin"


Only admins are allowed access.



## User Roles

### User

Can:

- Register
- Log in
- Access dashboard

Cannot:

- Access admin view
- Access admin API routes

### Admin

Can:

- Log in
- Access dashboard
- Access admin view
- Access admin API routes



## Admin Account

The application includes a hardcoded admin account.

Example:


Email: admin@test.com
Password: admin123




## Security Features

### Password Hashing

Passwords are hashed using bcrypt before storage.

Example:

bcrypt.hashSync(password, 10)



### JWT Authentication

JWT tokens are signed with a secret key.

Example:

jwt.sign(
  {
    email: user.email,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d"
  }
)



### Protected Routes

Frontend protected routes:

- /me
- /admin

Backend protected routes:

- /dashboard
- /admin



## Limitations

This project does not use a database.

Users are stored in memory using a JavaScript array.

As a result:

- User data is lost when the backend server restarts.
- The application is intended for learning purposes only.
- A real application should use a database such as PostgreSQL, MySQL, MongoDB, or SQLite.



## Technologies Used

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- JSON Web Token
- bcryptjs
- CORS
- dotenv



## Author

Created as an authentication and authorization exercise using React, Express.js, JWT, and role-based access control.
````
