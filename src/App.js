import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import firebase from "firebase";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import db from "./firebase";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // This code fires when the page gets reloaded and when change happened in the firestore
    db.collection("todos")
      .orderBy("timestamps", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    // Add the todo to the existing todos array
    // setTodos([...todos, input]);
    db.collection("todos").add({
      todo: input,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // sets the input field back to ''
    setInput("");
  };
  return (
    <div>
      <Header />
      <div className="form__page">
        <form>
          <div className="textField">
            <TextField
              value={input}
              onChange={(event) => setInput(event.target.value)}
              label="✅Write a Todo"
              variant="filled"
              color="primary"
            />
          </div>
          <div className="Button">
            <Button
              type="submit"
              disabled={!input}
              onClick={addTodo}
              variant="contained"
              color="primary"
            >
              Add Todo
            </Button>
          </div>
        </form>
      </div>

      <h1>All Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
