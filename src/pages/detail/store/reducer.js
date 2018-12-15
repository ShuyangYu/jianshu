import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    title: 'a',
    content: 'hello'
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        // case actionTypes.CHANGE_HOME_DATA:
        //     return state.merge({
        //         topicList: action.topicList,
        //         articleList: action.articleList,
        //         recommendList: action.recommendList,
        //         writterList: action.writterList,
        //     })
        // case actionTypes.ADD_MORE_LIST:
        //     return state.set('articleList', state.get('articleList').concat(action.list));
        // case actionTypes.CHANGE_SHOW_SCROLL:
        //     return state.set('showScroll', action.data);
        default:
            return state;
    }
};  