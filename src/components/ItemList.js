import React from "react";
import {useSelector} from 'react-redux';

import Task from "./Task";
import priorityEnum from "../constants/priorityEnum";

const selectTasks = state => {
    let tasks = state.tasks[state.filters.statusFilter.toLowerCase()]
    const priority = state.filters.priorityFilter;
    const searchRegex = new RegExp('.*' + state.filters.searchTearm + '.*', 'i');
    const applyFilter = task => {
        return (priority !== priorityEnum.ALL ? task.priority === priority : true) && searchRegex.test(task.title);
    }
    tasks = tasks.filter(applyFilter);
    return tasks;
}

const ItemList = () => {

    const tasks = useSelector(selectTasks);

    return (
        <div>
            <ul>{tasks.map(task => <li key={String(task.id)}><Task task={task} /></li>)}</ul>
        </div>
    );
}

export default ItemList;