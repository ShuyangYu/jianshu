import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable' ;


export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
})

export const changeSearchList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeSearchList(data.data));
            }).catch(() => {
                console.log('here');
            });
    }
}