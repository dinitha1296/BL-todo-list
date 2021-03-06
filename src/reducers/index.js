import { combineReducers } from "redux"

import taskReducer from "./taskReducer";
import filterReducer from './filterReducer';

const reducer = combineReducers({
    tasks: taskReducer,
    filters: filterReducer,
});

export default reducer