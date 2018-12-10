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