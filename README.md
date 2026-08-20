# Task Management App

A full-stack Task Management application that allows users to create, view, search, filter, update, complete, and delete tasks.

The application consists of a **React frontend** and a **FastAPI backend**, with **SQLAlchemy** used for database operations.

## Features

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed or incomplete
* Search tasks by title
* Filter tasks by completion status
* RESTful API architecture
* Interactive API documentation through Swagger UI and ReDoc
* CORS configuration for frontend-backend communication

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS Modules

### Backend

* Python
* FastAPI
* SQLAlchemy
* Pydantic Settings
* Uvicorn
* SQLite

## Project Structure

```text
task-management-app/
├── backend/
│   ├── core/
│   │   └── config.py
│   ├── db/
│   │   └── database.py
│   ├── models/
│   │   └── task.py
│   ├── routers/
│   │   └── task.py
│   ├── schemas/
│   │   └── task.py
│   ├── services/
│   │   └── task_service.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── .gitignore
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Python 3.10 or later
* Node.js and npm

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create and activate a virtual environment.

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` directory:

```env
API_PREFIX=/api
DEBUG=True
DATABASE_URL=sqlite:///./databse.db
ALLOWED_ORIGINS=http://localhost:5173
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend API will be available at:

```text
http://localhost:8000
```

### API Documentation

FastAPI automatically provides interactive API documentation:

* Swagger UI: `http://localhost:8000/docs`
* ReDoc: `http://localhost:8000/redoc`

## Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will typically be available at:

```text
http://localhost:5173
```

## API Endpoints

The application uses the `/api/tasks` endpoint.

| Method   | Endpoint                             | Description           |
| -------- | ------------------------------------ | --------------------- |
| `POST`   | `/api/tasks/`                        | Create a new task     |
| `GET`    | `/api/tasks/`                        | Get all tasks         |
| `GET`    | `/api/tasks/?completed=true`         | Get completed tasks   |
| `GET`    | `/api/tasks/?completed=false`        | Get incomplete tasks  |
| `GET`    | `/api/tasks/search?search_query=...` | Search tasks by title |
| `PUT`    | `/api/tasks/{task_id}`               | Update a task         |
| `DELETE` | `/api/tasks/{task_id}`               | Delete a task         |

## Task Data

A task contains the following information:

```json
{
  "id": 1,
  "title": "Finish project documentation",
  "description": "Write the README.md file for the project.",
  "completed": false
}
```

## Architecture

The backend follows a layered architecture:

```text
Client
   │
   ▼
React Frontend
   │
   ▼
FastAPI Router
   │
   ▼
Service Layer
   │
   ▼
SQLAlchemy Models
   │
   ▼
SQLite Database
```

### Backend Responsibilities

* **Routers** handle API requests and responses.
* **Services** contain the application's business logic.
* **Schemas** define request and response validation.
* **Models** represent database tables.
* **Core configuration** manages environment-based settings.
* **Database layer** manages database connections and table creation.

## Environment Variables

The backend uses environment variables for configuration.

| Variable          | Description                       | Example                  |
| ----------------- | --------------------------------- | ------------------------ |
| `API_PREFIX`      | Prefix for API routes             | `/api`                   |
| `DEBUG`           | Enables or disables debug mode    | `True`                   |
| `DATABASE_URL`    | Database connection URL           | `sqlite:///./databse.db` |
| `ALLOWED_ORIGINS` | Allowed frontend origins for CORS | `http://localhost:5173`  |

## Future Improvements

Possible improvements for the project include:

* User authentication and authorization
* User-specific tasks
* Task categories and priorities
* Due dates and reminders
* Task sorting
* Pagination
* Improved error handling and user feedback
* Automated tests for frontend and backend
* Docker containerization
* PostgreSQL support for production deployment

## Author

**Kelvin Uraca**

* GitHub: https://github.com/yuraka032
