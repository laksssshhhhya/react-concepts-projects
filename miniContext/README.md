# User Authentication with Context API

A simple user authentication system built using **React.js** and **Context API**, where users can log in and view their profile details.

---

## Features

- **User Login**
- **User Context for State Management**
- **Profile Display Based on Login Status**
- **React Functional Components with Hooks**

---

## Technologies Used

- **React.js**
- **Context API**
- **JavaScript (ES6+)**
- **React Hooks (useState, useContext)**

---

## Components Overview

### 1. **Login.jsx**

- Allows users to enter their username and password.
- Updates user state using Context API.

### 2. **Profile.jsx**

- Displays a welcome message with the username if the user is logged in.
- Shows a prompt to log in if no user is found.

### 3. **UserContext.js**

- Creates a Context object to manage user state globally.

### 4. **UserContextProvider.jsx**

- Provides the user state and setter function to child components.

### 5. **App.jsx**

- Wraps the application inside `UserContextProvider`.
- Renders `Login` and `Profile` components.

---

## How It Works

1. **User enters username and password** in the login form.
2. **On clicking submit**, the user details are stored in Context.
3. **Profile component** fetches user data from Context and displays it.
4. **If no user is logged in**, a message prompting login is shown.
