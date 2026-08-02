# Phase 4 – Static User Interface & Dashboard Design

## Objective

Build the complete static visual presentation layer for the Sports Club Management System using HTML, CSS, and vanilla JavaScript. Create independent Student Member Portal and Administrative Workspace interfaces using custom mock data variables without connecting to backend APIs.

## Progress

### Completed

- Created Student Member Portal interface (`student_dashboard.html`)
- Created Administrative Workspace interface (`admin_dashboard.html`)
- Built Sports Clubs, Practice Schedule, and Registration Form sections
- Built Membership Requests, Active Club Members, and User Management sections
- Styled both interfaces using CSS
- Rendered all interface data using JavaScript mock data
- Completed a fully static frontend without backend integration

## Student Member Portal Workflow

```
Open Student Dashboard
        ↓
Load Mock Club Data
        ↓
Render Sports Club Cards
        ↓
Render Practice Schedule
        ↓
Populate Registration Dropdown
        ↓
Display Registration Form
```

## Administrative Workspace Workflow

```
Open Admin Dashboard
        ↓
Load Mock Membership Requests
        ↓
Render Request Cards
        ↓
Load Mock Club Roster
        ↓
Render Roster Table
        ↓
Display User Management Buttons
```

## Implemented Interfaces

### Student Member Portal

| Component | Description |
|-----------|-------------|
| Sports Clubs | Displays available sports clubs using static cards |
| Practice Schedule | Displays mock training days and timings |
| Registration Form | Displays student registration form with club selection |

### Administrative Workspace

| Component | Description |
|-----------|-------------|
| Membership Requests | Displays mock pending membership requests |
| Active Club Members | Displays roster information in tabular format |
| User Management | Displays Add, Edit, and Remove Member action buttons |

## Frontend Implementations

- Used HTML5 semantic elements to structure both dashboards
- Applied CSS Grid for responsive card layouts
- Styled forms, tables, cards, and action buttons using CSS3
- Rendered sports clubs dynamically using JavaScript
- Rendered practice schedules dynamically using JavaScript
- Populated the registration dropdown from mock data
- Rendered membership requests dynamically using JavaScript
- Rendered the roster table dynamically using JavaScript
- Used custom mock data variables instead of backend APIs
- Maintained a decoupled frontend architecture for future backend integration