import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setTodos(snapShot.docs.map((doc) => ({id:doc.id,todo:doc.data().todo})));      
        // setTodos(snapShot.docs.map((doc) => doc.data().todo));  
      });
  }, []);

  return (
    <div className="App">
      <h1>to do</h1>
      <form>
        <input
          type="text"
          placeholder="enter"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="secondary"
        >
          add
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
