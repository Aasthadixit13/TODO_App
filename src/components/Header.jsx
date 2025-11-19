// Header.jsx 
// Props: title
import React from "react";

export function Header({ title = "My To-Do App" }) {
  return (
    <header className="w-full p-4 shadow-md rounded-b-md">
     <h1
  style={{
    color: "black",
    WebkitTextFillColor: "black"  
  }}
>
  {title}
</h1>
    </header>
  );
}
