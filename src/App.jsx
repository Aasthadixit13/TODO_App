import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";


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

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  function addTodo(e) {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now().toString(),
      text: trimmed,
      done: false,
      createdAt: Date.now(),
    };

    setTodos((prev) => [newTodo, ...prev]);
    setInputText("");
  }

  // Toggle completion status
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  // Delete a todo
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  // Edit todo text
  function editTodo(id, newText) {
    const trimmed = newText.trim();
    if (!trimmed) return;

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    );
  }

  // Clear only completed todos
  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  const completedCount = todos.filter((t) => t.done).length;

  return (
    <div id="app">
      <Header title="User To-Do App" />

      {/* New Todo Form */}
      <form className="new-todo" onSubmit={addTodo}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
          autoFocus
        />
        <button type="submit">Add</button>
      </form>

      {/* Stats & Clear Completed */}
      <div className="todo-stat">
        <span>
          {todos.length} total task{todos.length !== 1 && "s"}
          {completedCount > 0 && ` • ${completedCount} completed`}
        </span>

        {completedCount > 0 && (
          <button onClick={clearCompleted}>Clear Completed</button>
        )}
      </div>

      {/* Todo List */}
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}