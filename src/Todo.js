import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import db from "./firebase";

function Todo(props) {
  const deleteTodo = () => {
      db.collection('todos').doc(props.todo.id).delete();
  };
  return (
    <div className="List">
      <List className="List__content">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Speed up Buddy⌚" />
          <Button>
            <DeleteIcon onClick={deleteTodo} />
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
