import React, { useState } from "react";

import Input from "./components/Input";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="wrapper">
      <div className="header">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <Input
        title={title}
        content={content}
        todos={todos}
        setTitle={setTitle}
        setContent={setContent}
        setTodos={setTodos}
      />
      <div className="body_wrapper">
        <div className="content_wrapper">
          <h1>Working 🏃‍♀</h1>
          <TodoList
            type="todo"
            todos={todos}
            dones={dones}
            setTodos={setTodos}
            setDones={setDones}
          />
        </div>
        <div className="content_wrapper">
          <h1>Done 🦸‍♀</h1>
          <TodoList
            type="done"
            todos={todos}
            dones={dones}
            setTodos={setTodos}
            setDones={setDones}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
