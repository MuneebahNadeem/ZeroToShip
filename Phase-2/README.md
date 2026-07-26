# Phase 2 – Authentication & Authorization

## Objective

Build the backend authentication system for the Sports Club Management System by implementing secure user registration, login functionality, session-based authentication, and authorization controls for administrative operations.

## Progress

### Completed

- Created authentication routes for user registration and login
- Connected authentication endpoints through project URL configuration
- Parsed incoming JSON request data
- Validated required registration and login fields
- Prevented duplicate email registrations
- Securely hashed user passwords using Django's built-in password hashing utilities
- Created new `Member` records in the MySQL database
- Tested the registration endpoint using Postman
- Verified successful member creation in MySQL
- Verified password hashing before database storage
- Verified duplicate email validation
- Implemented login authentication using email and password verification
- Verified passwords using Django's `check_password()` utility
- Implemented session-based authentication using Django sessions
- Created custom authorization guards using decorators
- Restricted administrative routes to Admin users only
- Protected admin dashboard access
- Protected roster management functionality from unauthorized users
- Tested authentication and authorization workflows using Postman
- Verified Admin and Student role-based access behavior

## Authentication Workflow

```
Client Request
      ↓
Receive JSON Data
      ↓
Validate Required Fields
      ↓
Check User Credentials
      ↓
Verify Password Hash
      ↓
Create Authentication Session
      ↓
Return Response
```

## Registration Workflow

```
Client Request
      ↓
Receive JSON Data
      ↓
Validate Required Fields
      ↓
Check Duplicate Email
      ↓
Hash Password
      ↓
Create Member Record
      ↓
Return Success Response
```

## Authorization Workflow

```
User Requests Protected Route
            ↓
Check Active Session
            ↓
Retrieve Member Data
            ↓
Check Membership Type
            ↓
      ┌───────────────┐
      │               │
    Admin          Student
      │               │
      ↓               ↓
 Access Granted   Access Denied
```

## Implemented Endpoints

### Authentication Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/register/` | POST | Register a new member |
| `/login/` | POST | Authenticate existing member and create session |

### Authorization Protected Routes

| Endpoint | Method | Access |
|----------|--------|--------|
| `/admin-dashboard/` | GET | Admin only |
| `/manage-roster/` | GET | Admin only |

## Security Implementations

- Passwords are never stored as plain text
- Passwords are securely hashed using Django's `make_password()`
- Login authentication verifies passwords using `check_password()`
- User sessions are created after successful authentication
- Administrative routes are protected using custom authorization decorators
- Student accounts are prevented from accessing administrative operations

## Manual Testing

All authentication and authorization features were tested using Postman.

### Registration Testing

- Verified successful registration
- Verified missing required fields handling
- Verified duplicate email rejection
- Confirmed newly created members in the MySQL database
- Confirmed passwords are stored as hashed values rather than plain text

### Login Testing

- Verified successful login
- Verified incorrect password rejection
- Verified unknown email rejection
- Confirmed session creation after successful authentication

### Authorization Testing

- Verified Admin users can access administrative routes
- Verified Student users are denied access to administrative routes
- Verified Student users cannot access roster management functionality

