# ZeroToShip

A full-stack Sports Club Management System built using Django, MySQL, HTML, CSS, and Vanilla JavaScript. The system provides separate Student and Administrator workflows with live database communication, authentication, club enrollment, and roster management.

---

## Project Overview

The Sports Club Management System allows students to:

* Create an account
* Log in securely
* View available sports clubs
* View club coaches and capacity
* Select a club for enrollment
* Enroll in a club
* Receive real-time enrollment feedback

Administrators can:

* Log in through the same authentication system
* Access a protected administrative dashboard
* View active club members
* View club roster information loaded directly from the database

The application uses Django as the backend framework, MySQL for persistent data storage, and asynchronous JavaScript `fetch()` requests to connect the frontend with backend JSON endpoints.

---

## Development Progress

* [x] Phase 1 – Project setup, Django configuration, MySQL integration, and database initialization
* [x] Phase 2 – Database models, relationships, and schema implementation
* [x] Phase 3 – Business logic, club operations, and enrollment management
* [x] Phase 4 – Static user interface, dashboard layouts, and mock data rendering
* [x] Phase 5 – Final integration, backend connectivity, database persistence, and system testing

---

## Project Structure

```text
ZeroToShip/
│
├── Phase-1/     # Project Setup & Database Configuration
├── Phase-2/     # Database Models & Relationships
├── Phase-3/     # Business Logic & Club Operations
├── Phase-4/     # Static User Interface & Dashboard Design
├── Phase-5/     # Final Integration & System Testing
└── README.md
```

---

## Tech Stack

### Backend

* Python
* Django
* Django ORM
* MySQL
* python-dotenv

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)
* JavaScript `fetch()` API

### Database

* MySQL
* Relational database models
* Django migrations

### Version Control

* Git
* GitHub

---

# Local Setup

## Prerequisites

Make sure the following are installed:

* Python 3.x
* MySQL Server
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/MuneebahNadeem/ZeroToShip.git
cd ZeroToShip/Phase-1

---

## 2. Create and Activate a Virtual Environment

Create the virtual environment:

```bash
python -m venv .venv
```

### Windows PowerShell

```powershell
.\.venv\Scripts\Activate.ps1
```

If the virtual environment is already present:

```powershell
.\.venv\Scripts\Activate.ps1
```

The terminal should show:

```text
(.venv)
```

---

## 3. Install Dependencies

Install the required Python packages:

```bash
pip install django mysqlclient python-dotenv
```

---

## 4. Configure the Environment

Create a `.env` file inside the Phase-1 project directory.

Add the database configuration using your own MySQL credentials:

```env
DB_NAME=sportsclub_db
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
```

Do not commit the `.env` file to GitHub.

The repository `.gitignore` contains:

```text
.env
```

so local database credentials remain private.

---

## 5. Create the MySQL Database

Open MySQL and create the project database:

```sql
CREATE DATABASE sportsclub_db;
```

Make sure the MySQL server is running before starting Django.

---

## 6. Apply Database Migrations

From the Phase-1 directory, run:

```bash
python manage.py makemigrations
python manage.py migrate
```

This creates the required Django and project database tables.

---

## 7. Start the Development Server

Run:

```bash
python manage.py runserver
```

The application will be available at:

```text
http://127.0.0.1:8000/
```

---

# Application Testing

The following workflow tests the complete integrated system.

## 1. Test Registration

Open:

```text
http://127.0.0.1:8000/register-page/
```

Create a new Student account.

Verify that:

* Name is accepted
* Email is accepted
* Password is accepted
* Membership type can be selected
* Registration succeeds
* The new member is stored in MySQL

Also test registration with an existing email and verify that duplicate accounts are rejected.

---

## 2. Test Student Login

Open:

```text
http://127.0.0.1:8000/login-page/
```

Log in using the Student account.

Verify that:

* Valid credentials are accepted
* A Django session is created
* The user is redirected to the Student Dashboard

Test invalid credentials and verify that login fails appropriately.

---

## 3. Test Live Club Listings

After entering the Student Dashboard:

```text
http://127.0.0.1:8000/student-dashboard/
```

Verify that:

* Sports clubs are loaded from the backend
* Club cards are generated dynamically
* Club names are displayed
* Coach names are displayed
* Club capacities are displayed
* The registration dropdown is populated dynamically

The displayed clubs should come from the MySQL database rather than hardcoded JavaScript data.

---

## 4. Test Club Enrollment

From the Student Dashboard:

1. Select a club.
2. Submit the registration form.
3. Verify the enrollment success message.
4. Check the `Roster` table in MySQL.

Verify that the new roster record contains:

* The correct member
* The correct club
* The enrollment date

---

## 5. Test Enrollment Edge Cases

### Duplicate Enrollment

Attempt to enroll the same student in the same club again.

Expected result:

```text
Member is already enrolled in this club!
```

### Missing Club Selection

Submit the registration form without selecting a club.

Expected result:

```text
Please select a club.
```

### Full Club

Attempt to enroll in a club that has reached its maximum capacity.

Expected result:

```text
Club is already full!
```

---

## 6. Test Administrator Registration

Create another account and select:

```text
Admin
```

as the membership type.

Verify that the account is stored in the `Member` table with:

```text
membership_type = Admin
```

---

## 7. Test Administrator Login

Log in using the Administrator account.

Verify that the administrator is redirected to:

```text
/admin-dashboard/
```

The dashboard should display the administrative interface.

---

## 8. Test Administrator Access Protection

Log out or use a Student account and attempt to access:

```text
http://127.0.0.1:8000/admin-dashboard/
```

Expected result:

```text
Access Denied!
```

This confirms that the administrative dashboard is protected by role-based access control.

---

## 9. Test Live Roster

From the Administrator Dashboard, verify that the Active Club Members table displays live roster information.

The table should show:

* Member
* Club
* Membership Type

The information should be loaded through the Django roster API and should reflect records stored in MySQL.

---

## 10. Test End-to-End System Flow

The complete system should work through the following flow:

```text
Register
   ↓
Login
   ↓
Create Session
   ↓
Open Appropriate Dashboard
   ↓
Load Live Club Data
   ↓
Select Club
   ↓
Submit Enrollment
   ↓
Django Validation
   ↓
Save Roster Record to MySQL
   ↓
Administrator Logs In
   ↓
Load Live Roster
   ↓
Display Updated Club Membership
```

---

# Backend API Endpoints

| Endpoint              | Method | Purpose                           |
| --------------------- | ------ | --------------------------------- |
| `/register/`          | POST   | Register a new member             |
| `/login/`             | POST   | Authenticate a member             |
| `/api/club/listings/` | GET    | Retrieve available sports clubs   |
| `/api/club/enroll/`   | POST   | Enroll a member in a club         |
| `/api/club/leave/`    | POST   | Remove a member from a club       |
| `/api/club/roster/`   | GET    | Retrieve the active club roster   |
| `/student-dashboard/` | GET    | Student dashboard                 |
| `/admin-dashboard/`   | GET    | Protected administrator dashboard |

---

# Data Flow

```text
Frontend
    ↓
JavaScript fetch()
    ↓
Django URL
    ↓
Django View
    ↓
Django ORM
    ↓
MySQL Database
    ↓
JSON Response
    ↓
JavaScript
    ↓
Updated Interface
```

---

# Security and Configuration

* Passwords are hashed before being stored in the database.
* Django sessions are used to track authenticated members.
* Administrator dashboard access is restricted by membership type.
* Database credentials are stored in environment variables.
* `.env` is excluded from version control.
* Python virtual environments are excluded from version control.
* Python cache files are excluded from version control.
* SQLite database files are excluded from version control.

---

# Final Integration Result

Phase 5 completes the integration of the Sports Club Management System by connecting the Phase 4 frontend with the Django backend and MySQL persistence layer.

The final application replaces static mock data with live database-driven content and provides an end-to-end workflow covering authentication, role-based access, club discovery, enrollment, validation, and roster viewing.
