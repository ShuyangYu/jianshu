import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    title: '',
    content: ''
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DETAIL:
            console.log(action);
            return state.merge({
                title: action.title,
                content: action.content,
            })
        // case actionTypes.ADD_MORE_LIST:
        //     return state.set('articleList', state.get('articleList').concat(action.list));
        // case actionTypes.CHANGE_SHOW_SCROLL:
        //     return state.set('showScroll', action.data);
        default:
            return state;
    }
};  