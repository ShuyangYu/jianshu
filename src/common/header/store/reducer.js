import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    focused: false,
    list: [],
});

export default  (state=defaultState, action) => {
    if(action.type === actionCreators.SEARCH_FOCUS) {
        // 结合之前的对象和设置的值，返回一个新的对象
        return state.set('focused', true);
    }

    if(action.type === actionCreators.SEARCH_BLUR) {
        return state.set('focused', false);
    }

    if(action.type === actionCreators.CHANGE_SEARCH_LIST) {
        return state.set('list', action.data);
    }
    return state;
};  