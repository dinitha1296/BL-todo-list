import React from 'react';
import { useDispatch } from 'react-redux';

import { markAsComplete, markAsIncomplete, deleteCompleted, deleteIncomplete } from '../actions/taskActions';

const Task = (props) => {

    const dispatch = useDispatch();

    const moveTask = (id, completed) => dispatch(completed ? markAsIncomplete(id) : markAsComplete(id));

    const deleteTask = (id, completed) => dispatch(completed ? deleteCompleted(id) : deleteIncomplete(id));

    return (

        <div style={{display: 'inline-flex'}}>
            <p>{JSON.stringify(props.task)}</p>
            <div style={{backgroundColor: props.task.color, height: '100px', width:'50px'}}/>
            <div style={{display: 'block'}}>
                <p>{props.task.priority}</p>
                <p>{props.task.title}</p>
                <button 
                    onClick={() => moveTask(props.task.id, props.task.completed)}>
                    Mark as {props.task.completed ? 'undone' : 'done'}
                </button>
                <button>Edit</button>
                <button 
                    onClick={() => deleteTask(props.task.id, props.task.completed)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Task;