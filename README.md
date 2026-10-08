
# ICSI 418Y - Programming Assignment 3

## Projects and Project Memberships

This is a full-stack project management application built using React, Node.js, Express, and MongoDB.

This project extends PA2 by adding projects and project memberships.

## Features

- User Signup and Login
- Create and view projects
- Select project leads from registered users
- Add and remove project members
- Prevent duplicate memberships
- Project leads cannot be removed
- Users can belong to multiple projects
- Error handling and validation

## Technologies Used

- React (Vite)
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CSS

## How to Run

### Backend

1. Open the `server` folder.
2. Run `npm install`.
3. Create a `.env` file with your MongoDB connection string (`MONGO_URI`).
4. Run `node server.js`.

### Frontend

1. Open the `client` folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:5173` in your browser.

## Database

The application uses three MongoDB collections:

- Users
- Projects
- ProjectMemberships

The collections use MongoDB ObjectId references to connect users and projects.

## GitHub Repository

https://github.com/vijayam99/icsi418y-pa3
