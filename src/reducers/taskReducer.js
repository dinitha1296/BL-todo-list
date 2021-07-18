import initTaskList from '../todo-list.json';
import taskActions from '../actions/taskActions';

const initialTaskState = {
    completed: initTaskList.filter(task => task.completed),
    todo: initTaskList.filter(task => !task.completed),
    nextId: 101,
}

const taskReducer = (state = initialTaskState, action) => {
    let oldTask;
    let completed;
    let todo;
    let task;
    let newTask;
    switch (action.type) { 
        case taskActions.MARK_AS_COMPLETE:
            console.log('taskActions.MARK_AS_COMPLETE');
            oldTask = state.todo.find(t => t.id === action.payload);
            if (oldTask === null) return state;
            task = {...oldTask, completed: true};
            completed = [task, ...state.completed];
            todo = state.todo.filter(t => t.id !== task.id);
            return {...state, todo, completed}
        case taskActions.MARK_AS_INCOMPLETE:
            console.log('taskActions.MARK_AS_INCOMPLETE');
            oldTask = state.completed.find(t => t.id === action.payload);
            if (oldTask === null) return state;
            task = {...oldTask, completed: false};
            todo = [task, ...state.todo];
            completed = state.completed.filter(t => t.id !== task.id);
            return {...state, todo, completed}
        case taskActions.DELETE_COMPLETED:
            console.log('taskActions.DELETE_COMPLETED');
            completed = state.completed.filter(t => t.id !== action.payload);
            return {...state, completed}
        case taskActions.DELETE_INCOMPLETE:
            console.log('taskActions.DELETE_INCOMPLETE');
            todo = state.todo.filter(t => t.id !== action.payload);
            return {...state, todo}
        case taskActions.ADD_TASK:
            newTask = action.payload;
            newTask.id = state.nextId;
            todo = [newTask, ...state.todo];
            return {...state, todo, nextId: newTask.id + 1}
        default: return state
    }
}

export default taskReducer;