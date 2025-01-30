# Towing & Recovery Backend

## Overview
The backend of the **Towing & Recovery** application is built using **Node.js** and **Express.js** to provide a robust and scalable API. It connects to a **MongoDB** database using **Mongoose** and includes authentication, middleware, and various routes for handling towing service operations.

## Technologies Used
- **Node.js** - JavaScript runtime for backend development
- **Express.js** - Web framework for building APIs
- **MongoDB** - NoSQL database for storing towing service data
- **Mongoose** - ODM library for interacting with MongoDB
- **Cors** - Middleware to enable cross-origin resource sharing
- **Dotenv** - Manages environment variables securely
- **JSON Web Token (JWT)** - Authentication and authorization
- **bcrypt.js** - Password hashing for secure user authentication
- **Nodemon** - Development tool for automatic server restarts

## Project Structure
```
backend/
├── models/         
├── routes/         
├── controllers/    
├── config/         
├── middleware/     
├── server.js       
├── package.json    
├── .env            
├── .gitignore      
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/towing-and-recovery.git
cd towing-and-recovery/backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
```
PORT=5000
MONGO_URI=mongodb+srv://<nedzungani_k>:<Ndivho1@>@cluster0.ntse0.mongodb.net/towing-recovery?retryWrites=true&w=majority
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OSIsIm5hbWUiOiJLaG9uYW5pIiwiZXhwIjo5OTk5OTk5OTk5fQ.e6pmC2d6EAxgpoYY2sgTG5Fwxnhrz3MTDHG1SZp3Ce4

```

### 4. Start the Server
#### Development Mode (with auto-reload using Nodemon)
```sh
npm run dev
```
#### Production Mode
```sh
npm start
```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return JWT

### Towing Requests
- `GET /api/towing` - Retrieve all towing requests
- `POST /api/towing` - Create a new towing request

### Users
- `GET /api/users/:id` - Get user details by ID

## Notes
- Ensure MongoDB is running locally or provide a valid cloud-based MongoDB URI.
- Use **Postman** or any API testing tool to interact with the API.
- Secure your **.env** file and do not expose secrets.

## License
This project is licensed under the MIT License.


