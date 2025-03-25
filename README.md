# SyncThreads Assignment

## Project Overview
This project is a full-stack application featuring user authentication, a dashboard, and an interactive map view. The backend is built using **Node.js and Express**, while the frontend is developed with **React and Material UI**. The application fetches user-specific data from the backend and displays it dynamically.

## Features
- **User Authentication:** Secure login and session management using JWT.
- **Dashboard:** Displays user-specific cards fetched from the backend.
- **Map View:** Interactive map with dynamically updated location.
- **Protected Routes:** Redirects unauthorized users to the login page.
- **API Integration:** Fetches data from the backend and updates UI accordingly.

## Tech Stack
- **Frontend:** React, React Router, Material UI, Leaflet (for maps)
- **Backend:** Node.js, Express.js, MongoDB (for user data storage)
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** GitHub, Vercel/Heroku (optional)

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Clone the Repository
```sh
git clone https://github.com/vivekrudra980/syncthreads_assignment.git
cd syncthreads_assignment
```

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The backend will run on **http://localhost:5000**.

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The frontend will run on **http://localhost:3000**.

## API Endpoints
### **Authentication**
- **POST** `/api/auth/login` - Login user and return JWT.
- **POST** `/api/auth/register` - Register new user.

### **Dashboard**
- **GET** `/api/dashboard` - Fetch user-specific dashboard data.

### **Map**
- **GET** `/api/map` - Fetch location data for the map.

## Usage
1. Run both backend and frontend servers.
2. Register a new user or log in.
3. Access the dashboard to view personalized cards.
4. Click on a card to navigate to the map view.

## Troubleshooting
- **Error: "User not logged in" on Dashboard/Map API?**
  - Ensure you are logged in and that your JWT token is stored in **localStorage**.
- **Marker image not showing on map?**
  - Ensure Leaflet CSS and dependencies are properly imported.
- **Git push errors?**
  - Run `git pull origin main --rebase` before pushing.

## Contribution
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push and create a pull request:
   ```sh
   git push origin feature-branch
   ```

## License
This project is licensed under the MIT License.

