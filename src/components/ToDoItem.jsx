import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { timeAgo } from "../utils/timeAgo";

export function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit(e) {
    e.preventDefault();
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  }

  return (
    <li className="todo-item">

      {/* 🔹 HEADER */}
      <div className="todo-header">

        {/*  Show time ago instead of Pending/Completed */}
        <span>{timeAgo(todo.createdAt)}</span>

        {/* 🔹 ACTION BUTTONS */}
        <div className="todo-actions">

          {/* Normal mode → Edit + Delete */}
          {!isEditing && (
            <>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setEditText(todo.text);
                }}
              >
                <FaEdit />
              </button>

              <button onClick={() => onDelete(todo.id)}>
                <FaTrash />
              </button>
            </>
          )}

          {/* Edit mode → Save + Cancel */}
          {isEditing && (
            <>
              <button onClick={saveEdit}>
                <FaSave />
              </button>

              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditText(todo.text);
                }}
              >
                <FaTimes />
              </button>
            </>
          )}
        </div>
      </div>

      {/* 🔹 BODY */}
      <div className="todo-body">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <form onSubmit={saveEdit} style={{ flexGrow: 1 }}>
            <input
              autoFocus
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </form>
        ) : (
          <p className={todo.done ? "todo-done" : ""}>{todo.text}</p>
        )}
      </div>
    </li>
  );
}
