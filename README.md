# Pet Adoption Management System (Backend)

This is a simple backend project built for a Pet Adoption Management System.
It was developed as part of a short assignment (2 days) to demonstrate backend concepts like authentication, role-based access, and CRUD APIs.

---

## What this project does

### Visitor
- View available pets
- Search pets by name
- Filter pets by species and breed
- View pet details

### User
- Register and login
- Apply to adopt a pet
- View own adoption requests and their status

### Admin
- Add, update, and delete pets
- View all adoption requests
- Approve or reject adoption requests

---

## Tech Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Morgan for request logging

---

## Folder Structure

```
src
index.js
utils
config.js
models
controllers
routes
middleware
```

---

## How authentication works

- JWT is used for authentication
- Token is sent in request headers as:

```
Authorization: Bearer <token>
```

- Users have roles:
  - USER
  - ADMIN

Admin-only routes are protected using middleware.

---

## API Overview

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Pets
- GET `/api/pet`
- GET `/api/pet/:id`
- POST `/api/pet` (Admin)
- PUT `/api/pet/:id` (Admin)
- DELETE `/api/pet/:id` (Admin)

### Adoptions
- POST `/api/adoption` (User)
- GET `/api/adoption/applies` (User)
- GET `/api/adoption` (Admin)
- PUT `/api/adoption/:id` (Admin)

---

## Running the project

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file using `.env.example`
4. Start the server

```bash
npm start
```

Server runs on `http://localhost:5000`

---

## Notes

- This project focuses mainly on backend logic
- Frontend can be built separately using React
- Error handling and validation are kept simple

---

## Author

Built by a developer as a short backend assignment to demonstrate core Node.js and Express skills.
