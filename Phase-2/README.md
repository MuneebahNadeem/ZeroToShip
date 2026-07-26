# Phase 2 – Authentication & Authorization

## Objective

Build the backend authentication system for the Sports Club Management System by implementing secure user registration, login functionality, and authorization controls.

## Progress

### Completed
- Studied Django authentication, authorization, and password hashing concepts
- Created authentication routes for user registration and login
- Connected authentication endpoints through project URL configuration
- Parsed incoming JSON request data
- Validated required registration fields
- Prevented duplicate email registrations
- Securely hashed user passwords using Django's built-in password hashing utilities
- Created new `Member` records in the MySQL database
- Tested the registration endpoint using Postman
- Verified successful member creation in MySQL
- Verified password hashing before database storage
- Verified duplicate email validation

### In Progress
- Implement login endpoint
- Implement authentication session handling
- Implement authorization guards for administrative access

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
Return Response
```

## Manual Testing

- Sent registration requests using Postman
- Verified successful registration (`200 OK`)
- Confirmed duplicate email requests are rejected
- Verified newly created members in the MySQL database
- Confirmed passwords are stored as hashed values rather than plain text

## Learnings

- Difference between authentication and authorization
- Processing JSON request bodies in Django
- Connecting URL routes to view functions
- Using Django ORM to query and create database records
- Secure password hashing with Django's authentication utilities
- Testing backend endpoints using Postman