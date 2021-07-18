const taskActions = {
    ADD_TASK: 'tasks/add',
    MARK_AS_COMPLETE: 'tasks/markAsComplete',
    MARK_AS_INCOMPLETE: 'tasks/markAsIncomplete',
    DELETE_COMPLETED: 'tasks/deleteCompleted',
    DELETE_INCOMPLETE: 'tasks/deleteIncomplete',
}

const markAsComplete = taskId => {
    console.log('markAsComplete' + taskId);
    return {
        type: taskActions.MARK_AS_COMPLETE,
        payload: taskId,
    }
}

const markAsIncomplete = taskId => {
    console.log('markAsIncomplete' + taskId);
    return {
        type: taskActions.MARK_AS_INCOMPLETE,
        payload: taskId,
    }
}

const deleteCompleted = taskId => {
    console.log('deleteCompleted' + taskId);
    return {
        type: taskActions.DELETE_COMPLETED,
        payload: taskId,
    }
}

const deleteIncomplete = taskId => {
    console.log('deleteIncomplete' + taskId);
    return {
        type: taskActions.DELETE_INCOMPLETE,
        payload: taskId,
    }
}

const addTask = task => {
    return {
        type: taskActions.ADD_TASK,
        payload: task
    }
}

export { markAsComplete, markAsIncomplete, deleteCompleted, deleteIncomplete, addTask };
export default taskActions;