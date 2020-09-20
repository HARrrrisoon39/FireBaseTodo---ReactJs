import React from 'react';
import { Button } from "@material-ui/core";
import db from './firebase';

function Todo(props) {
    return (
        <div>
            <li>{props.todo.todo}</li>
            <button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>delete</button>
        </div>
    //     <div>
    //     <li>{props.text}</li>
    // </div>
    )
}

export default Todo


