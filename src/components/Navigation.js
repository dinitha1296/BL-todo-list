import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import priorityEnum from '../constants/priorityEnum';
import { changePriorityFilter, changeSearch } from '../actions/filterActions';
import NewTaskModal from './NewTaskModal';

const selectPriorityFilter = state => state.filters.priorityFilter;

const Navigation = () => {

    const [newTask, setNewTask] = useState(false);

    const priorityFilter = useSelector(selectPriorityFilter);
    
    const dispatch = useDispatch();

    const setPriorityFilter = priorityFilter => {
        dispatch(changePriorityFilter(priorityFilter));
    }
    
    const onSearchTextChange = (text) => {
        dispatch(changeSearch(text));
    }

    return (
        <div>
            {newTask && <NewTaskModal onClose={() => setNewTask(false)} />}
            <input type='text' placeholder='search' onChange={e => onSearchTextChange(e.target.value)} />
            <input type='submit' value='Add new' onClick={() => setNewTask(true)}/>
            <div>
                <p>Filter by</p>
                <label>
                    Priority
                    <select value={priorityFilter} 
                        onChange={e => setPriorityFilter(e.target.value)}
                    >
                        <option value={priorityEnum.ALL}>{priorityEnum.ALL}</option>
                        <option  value={priorityEnum.LOW}>{priorityEnum.LOW}</option>
                        <option value={priorityEnum.MEDIUM}>{priorityEnum.MEDIUM}</option>
                        <option value={priorityEnum.HIGH}>{priorityEnum.HIGH}</option>
                    </select>
                </label>
                <label>
                    Date Range
                    <input type='submit' value='Calender' />
                </label>
            </div>
        </div>
    );
}

export default Navigation;