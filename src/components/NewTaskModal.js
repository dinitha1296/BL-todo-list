import React, { useState } from "react";
import { useDispatch } from "react-redux";

import './NewTaskModal.css';
import colorPlateEnum from '../constants/colorPlateEnum';
import priorityEnum from "../constants/priorityEnum";
import { capitalize } from '../utils/strings';
import { addTask } from "../actions/taskActions";

const Warning = (props) => {
    return (
        <div className='warning'>
            <p className='warning-text'>{props.warning}</p>
        </div>
    );
}

const NewTaskModal = (props) => {

    const dispatch = useDispatch();

    const { A, B, C, D, E } = colorPlateEnum;
    const { HIGH, MEDIUM, LOW } = priorityEnum;

    const [color, setColor] = useState('');
    const [descripton, setDescription] = useState('');
    const [priority, setPriority] = useState(LOW);
    const [warning, setWarning] = useState('');

    const showWarning = message => {
        setWarning(message);
        setTimeout(() => setWarning(''), 5000);
    }

    const onSubmit = () => {
        if (!descripton) {
            showWarning('Please enter a description');
            return;
        }
        if (!color) {
            showWarning('Please select a color');
            return;
        }
        const task = {
            title: descripton, 
            timestamp: (new Date()).toISOString(),
            color, 
            completed: false,
            priority,
        };
        console.log(task);
        dispatch(addTask(task))
        props.onClose();
    }

    const priorityColor = p => p === priority ? 'lightblue': 'rgba(0,0,0,0.1)';

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                {warning && <Warning warning={warning} />}
                <h1>Create New TODO</h1>
                <textarea placeholder={'Description'} value={descripton} onChange={e => setDescription(e.target.value)}/>
                <div>
                    <div>
                        <button 
                            onClick={e => setPriority(HIGH)} 
                            style={{backgroundColor: priorityColor(HIGH)}}
                            >
                            {capitalize(HIGH)}
                        </button>
                        <button 
                            onClick={e => setPriority(MEDIUM)} 
                            style={{backgroundColor: priorityColor(MEDIUM)}}
                            >
                            {capitalize(MEDIUM)}
                        </button>
                        <button 
                            onClick={e => setPriority(LOW)} 
                            style={{backgroundColor: priorityColor(LOW)}}
                            >
                            {capitalize(LOW)}
                        </button>
                    </div>
                    <select className='color-select' value={color} onChange={e => setColor(e.target.value)} style={{backgroundColor: color}}>
                        <option id='A' className='color-opt' value={A} style={{backgroundColor: A}}></option>
                        <option id='B' className='color-opt' value={B} style={{backgroundColor: B}}></option>
                        <option id='C' className='color-opt' value={C} style={{backgroundColor: C}}></option>
                        <option id='D' className='color-opt' value={D} style={{backgroundColor: D}}></option>
                        <option id='E' className='color-opt' value={E} style={{backgroundColor: E}}></option>
                    </select>
                    <button onClick={onSubmit}>{'Add New'}</button>
                </div>
            </div>
        </div>
    )
}

export default NewTaskModal;