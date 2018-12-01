import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    mouseIn: false,
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        case actionCreators.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionCreators.SEARCH_BLUR:
            return state.set('focused', false);
        case actionCreators.CHANGE_SEARCH_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            });
        case actionCreators.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionCreators.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionCreators.CHANGE_PAGE:
            return state.set('page', action.nextPage);
        default:
            return state;
    }
};  