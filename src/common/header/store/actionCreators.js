import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable' ;


export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
})

export const changePage = (nextPage) => ({
    type: actionTypes.CHANGE_PAGE,
    nextPage,
})

const _changeSearchList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(_changeSearchList(data.data));
            }).catch(() => {
                console.log('here');
            });
    }
}