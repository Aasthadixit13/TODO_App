# React Assignment: To-Do List Application

## Description
This is a simple To-Do List application built using **React** with functional components.  
Users can **add, edit, delete, and mark tasks as completed**. The app stores tasks in **localStorage** so that data persists on page reload.

---

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Show "time ago" for task creation
- Persist tasks in localStorage
- Styled for a clean user interface
- Responsive and user-friendly

---

## Components

1. **App.jsx**  
   - Main component that manages the **state of all todos**.  
   - Handles adding, editing, deleting, and toggling todos.
   
2. **Header.jsx**  
   - Displays the title of the application.
   
3. **ToDoList.jsx**  
   - Renders the list of tasks dynamically using `.map()`.  
   - Passes callbacks for toggle, edit, and delete to `ToDoItem`.

4. **ToDoItem.jsx**  
   - Individual task item.  
   - Supports editing, deleting, marking as done.  
   - Displays **"time ago"** using the `timeAgo` utility.

5. **utils/timeAgo.js**  
   - Converts the timestamp to human-readable "time ago" format.

---

## Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/your-todo-app.git
cd your-todo-app
