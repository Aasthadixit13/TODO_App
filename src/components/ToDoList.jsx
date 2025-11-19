import React from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="empty-todo-list">
        <p>📝 Nothing here yet!</p>
        <p>Add your first task above and manage it easily—mark complete, edit, or delete as needed!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
