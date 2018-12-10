import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writterList: [],
    page: 1,
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        case actionCreators.CHANGE_HOME_DATA:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList,
                writterList: action.writterList,
            })
        case actionCreators.ADD_MORE_LIST:
            return state.set('articleList', state.get('articleList').concat(action.list));
        default:
            return state;
    }
};  