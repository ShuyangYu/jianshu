import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable' ;

const _createGetHomeInfoAction = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
    writterList: fromJS(data.writterList),
})

const _addMoreListAction = (data) => ({
    type: actionTypes.ADD_MORE_LIST,
    list: fromJS(data.articleList),
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const data = res.data.data;
                console.log(data);
                dispatch(_createGetHomeInfoAction(data));
            }).catch(() => {
                console.log('error');
            });
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
            .then((res) => {
                const data = res.data.data;
                console.log(data);
                dispatch(_addMoreListAction(data));
            }).catch(() => {
                console.log('error');
            });
    }
}