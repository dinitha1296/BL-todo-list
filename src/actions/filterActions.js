const filterActions = {
    CHANGE_STATUS_FILTER: 'filters/changeStatusFilter',
    CHANGE_PRIORITY_FILTER: 'filters/changePriorityFilter',
    CHANGE_SEARCH: 'filters/changeSearch',
}

const changeStatusFilter = (filterStatus) => {
    return {
        type: filterActions.CHANGE_STATUS_FILTER,
        payload: filterStatus,
    }
}

const changePriorityFilter = (filterStatus) => {
    return {
        type: filterActions.CHANGE_PRIORITY_FILTER,
        payload: filterStatus
    }
}

const changeSearch = (searchTearm) => {
    return {
        type: filterActions.CHANGE_SEARCH,
        payload: searchTearm
    }
}

export { changeStatusFilter, changePriorityFilter, changeSearch };
export default filterActions;