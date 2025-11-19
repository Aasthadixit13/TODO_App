import React, { useState, useEffect } from "react";

export default function App() {
  // ⭐ State to store todos
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  //  State to store input value
  const [inputText, setInputText] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  function addTodo(e) {
    e.preventDefault(); // prevent page reload
    const trimmed = inputText.trim();
    if (!trimmed) return; // do not add empty task

    const newTodo = {
      id: Date.now().toString(),
      text: trimmed,
      done: false,
      createdAt: Date.now(), // timestamp for "time ago"
    };

    setTodos((prev) => [newTodo, ...prev]); // add todo to state
    setInputText(""); // clear input
  }

  return (
    <div id="app">
      <h1>User To-Do App 📅</h1>

      {/* ⭐ Form to add new todo */}
      <form className="new-todo" onSubmit={addTodo}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      {/*  Display total tasks */}
      <div className="todo-stat">
        <span>{todos.length} total tasks</span>
        <button onClick={() => setTodos([])}>Clear Completed</button>
      </div>
    </div>
  );
}
