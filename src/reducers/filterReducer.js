import statusEnum from '../constants/statusEnum';
import priorityEnum from '../constants/priorityEnum';
import groupByEnum from '../constants/groupByEnum';
import filterActions from '../actions/filterActions';

const initialFilterState = {
    statusFilter: statusEnum.TODO,
    priorityFilter: priorityEnum.ALL,
    dataRangeFilter: {
        start: null,
        end: null,
    },
    groupByFilter: groupByEnum.MONTH,
    searchTearm: '',
}

const taskReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case filterActions.CHANGE_STATUS_FILTER:
            return {
                ...state,
                statusFilter: action.payload
            }
        case filterActions.CHANGE_PRIORITY_FILTER:
            return {
                ...state,
                priorityFilter: action.payload
            }
        case filterActions.CHANGE_SEARCH:
            return {
                ...state,
                searchTearm: action.payload
            }
        default: return state
    }
}

export default taskReducer;