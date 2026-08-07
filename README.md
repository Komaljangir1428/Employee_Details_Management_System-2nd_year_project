# 🏢 Employee Details Management System

A full-stack web application for managing employee records, featuring a responsive React frontend and a robust Spring Boot REST API backed by an H2 database.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20App-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://employee-details-management-system-2nd-year-project-zvd08i9k6.vercel.app)
https://employee-details-management-system-phi.vercel.app
[![Backend Status](https://img.shields.io/badge/API-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://employee-details-management-system-2nd-1xg7.onrender.com/users)

---

## 🚀 Live Links

- **Frontend App:** [Employee Details Management System](https://employee-details-management-system-2nd-year-project-zvd08i9k6.vercel.app)
- **Backend API Base:** `https://employee-details-management-system-2nd-1xg7.onrender.com`

---

## Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete employee records.
- **Dynamic Dashboard:** Real-time data visualization of all registered employees.
- **Form Validation & Error Handling:** Client-side input validation and error feedback.
- **RESTful API Architecture:** Clean endpoint separation for user operations.
- **Cross-Origin Resource Sharing (CORS):** Fully configured for secure frontend-backend communication.

---

## Tech Stack

**Frontend:**

- React.js
- Axios (HTTP Client)
- React Router DOM (Single Page Application routing)
- Bootstrap (UI Framework)

**Backend:**

- Java 17
- Spring Boot 3
- Spring Data JPA / Hibernate
- H2 Database

**Deployment & Hosting:**

- **Frontend:** Vercel
- **Backend:** Render

---

## API Endpoints

| Method   | Endpoint     | Description                            |
| :------- | :----------- | :------------------------------------- |
| `POST`   | `/user`      | Register a new user                    |
| `GET`    | `/users`     | Retrieve all registered users          |
| `GET`    | `/user/{id}` | Fetch details of a specific user by ID |
| `PUT`    | `/user/{id}` | Update details of an existing user     |
| `DELETE` | `/user/{id}` | Remove a user record by ID             |

---

## Local Setup & Installation

### Prerequisites

- Java JDK 17 or higher
- Node.js & npm
- Git

### 1. Clone the Repository

```bash
git clone [https://github.com/Komaljangir1428/Employee_Details_Management_System-2nd_year_project.git](https://github.com/Komaljangir1428/Employee_Details_Management_System-2nd_year_project.git)
cd Employee_Details_Management_System-2nd_year_project
```
