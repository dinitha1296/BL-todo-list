import React from 'react';
import { useDispatch } from 'react-redux';

import todoListJson from '../todo-list.json';
import ItemList from './ItemList';
import statusEnum from '../constants/statusEnum';
import { changeStatusFilter } from '../actions/filterActions';

const ItemContainer = () => {

    const dispatch = useDispatch();
    const setStatusFilter = (statusFilter) => dispatch(changeStatusFilter(statusFilter)) 

    return(
        <div>
            <div>
                <button onClick={() => setStatusFilter(statusEnum.TODO)}>
                    {statusEnum.TODO}
                </button>
                <button onClick={() => setStatusFilter(statusEnum.COMPLETED)}>
                    {statusEnum.COMPLETED}
                </button>
            </div>
            <div>
                <select>
                    <option>Group by - Month</option>
                    <option>{String(Array.isArray(todoListJson))}</option>
                </select>
            </div>
            <ItemList/>
        </div>
    );
}

export default ItemContainer;