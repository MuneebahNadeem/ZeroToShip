# Phase 1 – Django & Database Setup

## Objective
Set up the development environment for the Sports Club Management System using Django and MySQL.

## Progress

### Completed
- Created Django project (`sportsclub`)
- Created Django app (`core`)
- Installed MySQL Community Server
- Installed MySQL Workbench
- Installed Django and mysqlclient
- Created MySQL database (`sportsclub_db`)
- Configured project structure
- Set up virtual environment
- Configured Git repository and commit history
- Connected Django to MySQL
- Applied initial Django migrations successfully
- Designed relational database schema for the Sports Club Management System
- Created `Member` model with membership type support
- Created `SportsClub` model
- Created `Roster` model to manage member-club enrollments
- Established foreign key relationships between `Roster`, `Member`, and `SportsClub`
- Generated and applied database migrations for all models
- Performed manual database testing using Django Shell
- Verified successful creation of members, clubs, and roster records
- Verified database constraints and foreign key relationships

## Database Schema

### Member
- `member_id` (Primary Key)
- `name`
- `email` (Unique)
- `password_hash`
- `membership_type`

### SportsClub
- `club_id` (Primary Key)
- `club_name`
- `coach_name`
- `max_capacity_students`

### Roster
- `roster_id` (Primary Key)
- `member_id` (Foreign Key → Member)
- `club_id` (Foreign Key → SportsClub)
- `join_date`

## Manual Testing
- Inserted mock member records through Django Shell
- Inserted mock sports club records
- Created roster entries linking members to clubs
- Verified successful retrieval of related records
- Tested uniqueness constraint on member email
- Verified foreign key relationships through roster entries