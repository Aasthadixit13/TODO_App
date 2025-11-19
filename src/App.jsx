import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import "./styles/todo.css"; 



export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  
function addTodo(e) {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;

   
    const newTodo = {
      id: Date.now().toString(),
      text: trimmed,
      done: false,

     
      createdAt: Date.now()
    };

    setTodos((prev) => [newTodo, ...prev]);
    setInputText("");
  }
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function editTodo(id, newText) {
    const trimmed = newText.trim();
    if (!trimmed) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    );
  }

  return (
    <div id="app">
      <Header title="User To-Do App 📅" />

      {/* New Todo Input */}
      <form className="new-todo" onSubmit={addTodo}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Stats */}
      <div className="todo-stat">
        <span>{todos.length} total tasks</span>

        <button onClick={() => setTodos([])}>
  Clear Completed
</button>



      </div>

      {/* List Component */}
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

