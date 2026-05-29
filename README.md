# MERN Authentication App

A simple login/register application with:

- User Registration
- User Login
- Logout Functionality
- Protected Dashboard

Tech Stack:

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Backend Setup

## 1. Open Backend Folder

```bash
cd backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install MongoDB Community Server

Download and install MongoDB Community Server:

https://www.mongodb.com/try/download/community

During installation:

- Keep default settings
- Install MongoDB Compass

---

## 4. Create `.env` File

Inside backend folder create a `.env` file and paste the `MONGODB_URI and PORT`:

```
MONGODB_URI=mongodb://localhost:27017/testUserDB

PORT=5000
```

---

## 5. Start Backend Server

```bash
node server.js
```

Expected output:

```bash
Server running on port 5000
Connected to MongoDB
```

---

# Frontend Setup

## 1. Open Frontend Folder

```bash
cd frontend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Frontend

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

# MongoDB Compass

To view stored users:

1. Open MongoDB Compass
2. Click "Add New Connection"
3. Use connection string:

```txt
mongodb://127.0.0.1:27017
```

4. Click Connect

After registering a user you will see:

```txt
testUserDB
  └── users
```

---
