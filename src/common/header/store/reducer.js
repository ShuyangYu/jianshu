import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable' ;

const defaultState = fromJS({
    focused: false,
    list: [],
});

export default  (state=defaultState, action) => {
    switch(action.type) {
        case actionCreators.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionCreators.SEARCH_BLUR:
            return state.set('focused', false);
        case actionCreators.CHANGE_SEARCH_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
};  